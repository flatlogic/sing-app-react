import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

// D3 3 reads browser globals through the IIFE receiver.
const d3BrowserGlobal = {
  name: 'd3-browser-global',
  enforce: 'pre',
  transform(code, id) {
    if (id.endsWith('/node_modules/d3/d3.js')) {
      return code.replace(/\}\(\);?\s*$/, '}.call(globalThis);');
    }
  },
};

// Tree 2.8 schedules hover work that can otherwise run after the drag monitor clears.
const sortableTreeDragRaf = {
  name: 'sortable-tree-drag-raf',
  enforce: 'pre',
  transform(code, id) {
    if (!/\/node_modules\/react-sortable-tree\/dist\/index\.(esm|cjs)\.js$/.test(id)) return;
    const endDrag = '_this.endDrag(monitor.getDropResult());';
    if (!code.includes(endDrag)) {
      throw new Error('The pinned react-sortable-tree 2.8 drag lifecycle changed; review its RAF compatibility fix.');
    }
    return code.replace(endDrag, 'cancelAnimationFrame(_this.rafId);\n          ' + endDrag);
  },
};

export default defineConfig(({ mode }) => ({
  base: process.env.PUBLIC_URL || '/sing-app-react/',
  resolve: { dedupe: ['react','react-dom'], alias: [
    {find: /^moment$/, replacement:fileURLToPath(new URL('./node_modules/moment/moment.js',import.meta.url))},
    {find: /^~(.*)$/, replacement:'$1'},
    ...['actions','components','core','documentation','fonts','images','pages','reducers','styles','helpers'].map(name => ({find:name,replacement:fileURLToPath(new URL('./src/'+name,import.meta.url))})),
    {find:'events',replacement:fileURLToPath(new URL('./node_modules/events/events.js',import.meta.url))},
    {find:'config',replacement:fileURLToPath(new URL('./src/config.js',import.meta.url))}
  ] },
  optimizeDeps: { exclude: ['@fullcalendar/react', '@fullcalendar/common', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/list'], rolldownOptions: { plugins: [d3BrowserGlobal, sortableTreeDragRaf], moduleTypes:{'.js':'jsx'} } },
  plugins: [
    d3BrowserGlobal,
    sortableTreeDragRaf,
    {
      name: 'source-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (/\/src\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'transform' });
        }
      },
    },
    react({ jsxRuntime: 'classic' }),
  ],
  define: { global: 'globalThis', 'process.env': JSON.stringify({...loadEnv(mode,process.cwd(),'REACT_APP_'), NODE_ENV:mode, PUBLIC_URL:process.env.PUBLIC_URL || ''}) },
  css: {preprocessorOptions:{scss:{silenceDeprecations:['import','global-builtin','color-functions','slash-div','if-function']}}},
  build: {
    outDir: 'build',
    minify: 'terser',
    // Rickshaw's inheritance helper identifies this argument by its literal name.
    terserOptions: { maxWorkers: 1, mangle: { reserved: ['$super'] } },
  },
}));
