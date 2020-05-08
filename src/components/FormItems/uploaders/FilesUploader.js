import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'components/FormItems/uploaders/UploadService';
import Errors from 'components/FormItems/error/errors';

class FilesUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.input = React.createRef();
  }

  value = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  fileList = () => {
    return this.value().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.publicUrl,
    }));
  };

  handleRemove = (id) => {
    this.props.onChange(
      this.value().filter((item) => item.id !== id),
    );
  };

  handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, this.props.schema);

      this.setState({ loading: true });

      file = await FileUploader.upload(
        this.props.path,
        file,
        this.props.schema,
      );

      this.input.current.value = '';

      this.setState({ loading: false });
      this.props.onChange([...this.value(), file]);
    } catch (error) {
      this.input.current.value = '';
      console.log('error', error);
      this.setState({ loading: false });
      Errors.showMessage(error);
    }
  };

  formats = () => {
    const { schema } = this.props;

    if (schema && schema.formats) {
      return schema.formats
        .map((format) => `.${format}`)
        .join(',');
    }

    return undefined;
  };

  render() {
    const { max, readonly } = this.props;
    const { loading } = this.state;

    const uploadButton = (
      <label
        className="btn btn-outline-secondary px-4 mb-2"
        style={{ cursor: 'pointer' }}
      >
        {'Upload a file'}
        <input
          style={{ display: 'none' }}
          disabled={loading || readonly}
          accept={this.formats()}
          type="file"
          onChange={this.handleChange}
          ref={this.input}
        />
      </label>
    );

    return (
      <div>
        {readonly || (max && this.fileList().length >= max)
          ? null
          : uploadButton}

        {this.value() && this.value().length ? (
          <div>
            {this.value().map((item) => {
              return (
                <div key={item.id}>
                  <i className="la la-link text-muted mr-2"></i>

                  <a
                    href={item.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    {item.name}
                  </a>

                  {!readonly && (
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() =>
                        this.handleRemove(item.id)
                      }
                    >
                      <i className="la la-times"></i>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

FilesUploader.propTypes = {
  readonly: PropTypes.bool,
  path: PropTypes.string,
  max: PropTypes.number,
  schema: PropTypes.shape({
    image: PropTypes.bool,
    size: PropTypes.number,
    formats: PropTypes.arrayOf(PropTypes.string),
  }),
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default FilesUploader;
