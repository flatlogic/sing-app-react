import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { Input, Button } from 'reactstrap';

import Widget from '../../../../components/Widget';

import s from './Compose.module.scss';

const Compose = ({ data }) => (
  <Widget>
    <div className={s.compose}>
      <h4>Compose <span className="fw-semi-bold">New</span></h4>
      <Input type="text" placeholder="To" defaultValue={data && data.from} />
      <Input type="text" placeholder="Subject" defaultValue={data && data.theme} />
      <Editor
        wrapperClassName={s.wysiwygWrapper}
        editorClassName={s.wysiwygEditor}
        toolbarClassName={s.wysiwygToolbar}
      />
      <div className="text-md-right mt-xs">
        <Button color="gray">Discard</Button>
        <Button color="gray">Save</Button>
        <Button color="danger">Send</Button>
      </div>
    </div>
  </Widget>
);

Compose.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
};

Compose.defaultProps = {
  data: {
    from: null,
    to: null,
  },
};

export default Compose;
