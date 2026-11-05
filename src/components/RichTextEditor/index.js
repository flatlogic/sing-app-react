import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Extension, Node } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { safeEditorUrl } from './urls.mjs';
import './RichTextEditor.scss';

const SafeImage = Image.extend({
  parseHTML() {
    return [{ tag: 'img[src]', getAttrs: element => safeEditorUrl(element.getAttribute('src'), 'image') ? null : false }];
  },
});

const Embed = Node.create({
  name: 'embed', group: 'block', atom: true,
  addAttributes() { return { src: { default: null } }; },
  parseHTML() {
    return [{ tag: 'iframe[src]', getAttrs: element => safeEditorUrl(element.getAttribute('src'), 'embed') ? { src: element.getAttribute('src') } : false }];
  },
  renderHTML({ node }) {
    return ['iframe', { src: node.attrs.src, title: 'Embedded content', sandbox: 'allow-scripts allow-presentation', referrerpolicy: 'no-referrer', loading: 'lazy', allow: 'fullscreen' }];
  },
});

const Indent = Extension.create({
  name: 'indent',
  addGlobalAttributes() {
    return [{ types: ['paragraph', 'heading'], attributes: { indent: {
      default: 0,
      parseHTML: element => Math.max(0, Math.min(8, Number(element.getAttribute('data-indent')) || 0)),
      renderHTML: ({ indent }) => indent ? { 'data-indent': indent, style: `margin-left: ${indent * 1.5}rem` } : {},
    } } }];
  },
});

export default function RichTextEditor({ wrapperClassName = '', editorClassName = '', toolbarClassName = '' }) {
  const [dialog, setDialog] = useState(null);
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [error, setError] = useState('');
  const editor = useEditor({
    extensions: [StarterKit.configure({ link: { openOnClick: false, protocols: ['http', 'https', 'mailto', 'tel'], isAllowedUri: value => safeEditorUrl(value, 'link') } }), TextStyleKit, Subscript, Superscript, SafeImage, TextAlign.configure({ types: ['heading', 'paragraph'] }), Embed, Indent],
    content: '',
    shouldRerenderOnTransaction: true,
    editorProps: { attributes: { role: 'textbox', 'aria-label': 'Rich text editor', 'aria-multiline': 'true' } },
  });
  if (!editor) {
    return null;
  }

  const openDialog = kind => {
    setDialog(kind);
    setUrl(kind === 'link' ? editor.getAttributes('link').href || '' : '');
    setAlt('');
    setError('');
  };
  const insertUrl = () => {
    const value = url.trim();
    if (!safeEditorUrl(value, dialog)) {
      setError(dialog === 'embed' ? 'Enter an HTTPS embed URL without credentials.' : 'Enter a valid HTTP or HTTPS URL (links also support mailto and tel).');
      return;
    }
    const chain = editor.chain().focus();
    if (dialog === 'image') {
      chain.setImage({ src: value, alt }).run();
    } else if (dialog === 'embed') {
      chain.insertContent({ type: 'embed', attrs: { src: value } }).run();
    } else if (editor.state.selection.empty) {
      chain.insertContent({ type: 'text', text: value, marks: [{ type: 'link', attrs: { href: value } }] }).run();
    } else {
      chain.extendMarkRange('link').setLink({ href: value }).run();
    }
    setDialog(null);
  };
  const indent = direction => {
    if (editor.isActive('listItem')) {
      if (direction > 0) editor.chain().focus().sinkListItem('listItem').run();
      else editor.chain().focus().liftListItem('listItem').run();
      return;
    }
    const type = editor.isActive('heading') ? 'heading' : 'paragraph';
    const current = editor.getAttributes(type).indent || 0;
    editor.chain().focus().updateAttributes(type, { indent: Math.max(0, Math.min(8, current + direction)) }).run();
  };
  const button = (label, text, action, active = false) => (
    <button type="button" className={`btn btn-sm btn-light ${active ? 'active' : ''}`} aria-label={label} title={label} aria-pressed={active} onMouseDown={event => event.preventDefault()} onClick={action}>{text}</button>
  );

  const blockType = editor.isActive('heading') ? editor.getAttributes('heading').level : editor.isActive('blockquote') ? 'blockquote' : editor.isActive('codeBlock') ? 'codeBlock' : 'paragraph';
  const changeBlock = value => {
    const chain = editor.chain().focus();
    if (editor.isActive('blockquote')) chain.lift('blockquote');
    if (value === 'paragraph') chain.setParagraph().run();
    else if (value === 'blockquote') chain.toggleBlockquote().run();
    else if (value === 'codeBlock') chain.setCodeBlock().run();
    else chain.setHeading({ level: Number(value) }).run();
  };

  return (
    <div className={`rich-text-editor ${wrapperClassName}`}>
      <div role="toolbar" aria-label="Rich text formatting" className={`rich-text-toolbar ${toolbarClassName}`}>
        {button('Bold', <b>B</b>, () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
        {button('Italic', <i>I</i>, () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'))}
        {button('Underline', <u>U</u>, () => editor.chain().focus().toggleUnderline().run(), editor.isActive('underline'))}
        {button('Strikethrough', <s>S</s>, () => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'))}
        {button('Code', '<>', () => editor.chain().focus().toggleCode().run(), editor.isActive('code'))}
        {button('Subscript', <>X<sub>2</sub></>, () => editor.chain().focus().unsetSuperscript().toggleSubscript().run(), editor.isActive('subscript'))}
        {button('Superscript', <>X<sup>2</sup></>, () => editor.chain().focus().unsetSubscript().toggleSuperscript().run(), editor.isActive('superscript'))}
        <select aria-label="Block type" value={blockType} onChange={event => changeBlock(event.target.value)}>
          <option value="paragraph">Paragraph</option>{[1, 2, 3, 4, 5, 6].map(level => <option key={level} value={level}>Heading {level}</option>)}
          <option value="blockquote">Blockquote</option><option value="codeBlock">Code block</option>
        </select>
        <select aria-label="Font size" value={editor.getAttributes('textStyle').fontSize || ''} onChange={event => editor.chain().focus().setFontSize(event.target.value).run()}>
          <option value="">Font size</option>{[8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96].map(size => <option key={size} value={`${size}px`}>{size}</option>)}
        </select>
        <select aria-label="Font family" value={editor.getAttributes('textStyle').fontFamily || ''} onChange={event => editor.chain().focus().setFontFamily(event.target.value).run()}>
          <option value="">Font family</option>{['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'].map(font => <option key={font}>{font}</option>)}
        </select>
        <label title="Text color">A<input type="color" aria-label="Text color" value={editor.getAttributes('textStyle').color || '#000000'} onChange={event => editor.chain().focus().setColor(event.target.value).run()} /></label>
        <label title="Background color">▧<input type="color" aria-label="Background color" value={editor.getAttributes('textStyle').backgroundColor || '#ffffff'} onChange={event => editor.chain().focus().setBackgroundColor(event.target.value).run()} /></label>
        {button('Bullet list', '• List', () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
        {button('Ordered list', '1. List', () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'))}
        {button('Indent', '→', () => indent(1))}{button('Outdent', '←', () => indent(-1))}
        <select aria-label="Text alignment" value={editor.getAttributes(editor.isActive('heading') ? 'heading' : 'paragraph').textAlign || 'left'} onChange={event => editor.chain().focus().setTextAlign(event.target.value).run()}>
          {['left', 'center', 'right', 'justify'].map(value => <option key={value}>{value}</option>)}
        </select>
        {button('Add link', 'Link', () => openDialog('link'))}
        {button('Remove link', 'Unlink', () => editor.chain().focus().unsetLink().run())}
        {button('Insert image', 'Image', () => openDialog('image'))}
        {button('Insert embed', 'Embed', () => openDialog('embed'))}
        <select aria-label="Insert emoji" value="" onChange={event => editor.chain().focus().insertContent(event.target.value).run()}>
          <option value="">Emoji</option>{['😀', '😃', '😉', '😊', '😍', '😎', '😢', '😡', '👍', '👎', '👏', '🙏', '🎉', '❤️', '⭐', '✅'].map(emoji => <option key={emoji}>{emoji}</option>)}
        </select>
        {button('Remove formatting', 'Clear format', () => editor.chain().focus().unsetAllMarks().clearNodes().run())}
        {button('Undo', '↶', () => editor.chain().focus().undo().run())}{button('Redo', '↷', () => editor.chain().focus().redo().run())}
      </div>
      {dialog && <div role="group" aria-label={`${dialog} options`} className="rich-text-url-dialog">
        <label>URL<input aria-label="URL" className="form-control" value={url} onChange={event => setUrl(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); insertUrl(); } }} /></label>
        {dialog === 'image' && <label>Alternative text<input aria-label="Alternative text" className="form-control" value={alt} onChange={event => setAlt(event.target.value)} /></label>}
        <button type="button" className="btn btn-sm btn-primary" onClick={insertUrl}>Insert {dialog}</button>
        <button type="button" className="btn btn-sm btn-light" onClick={() => { setDialog(null); editor.commands.focus(); }}>Cancel</button>
        {error && <p role="alert" className="text-danger mb-0">{error}</p>}
      </div>}
      <EditorContent editor={editor} className={`rich-text-content ${editorClassName}`} />
    </div>
  );
}
