import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'components/FormItems/uploaders/UploadService';
import Errors from 'components/FormItems/error/errors';
import ImagesUploaderWrapper from 'components/FormItems/style/ImagesUploaderWrapper';

class ImagesUploader extends Component {
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

  doPreviewImage = (image) => {
    this.setState({
      imageSrc: image.publicUrl,
      imageAlt: image.name,
    });
  };

  doCloseImageModal = () => {
    this.setState({
      imageSrc: null,
      imageAlt: null,
    });
  };

  render() {
    const { max, readonly } = this.props;
    const { loading } = this.state;

    const uploadButton = (
      <label
        className="btn btn-outline-secondary px-4 mb-2"
        style={{ cursor: 'pointer' }}
      >
        {'Upload an image'}
        <input
          style={{ display: 'none' }}
          disabled={loading || readonly}
          accept="image/*"
          type="file"
          onChange={this.handleChange}
          ref={this.input}
        />
      </label>
    );

    return (
      <ImagesUploaderWrapper>
        {readonly || (max && this.fileList().length >= max)
          ? null
          : uploadButton}

        {this.value() && this.value().length ? (
          <div className="d-flex flex-row flex-wrap">
            {this.value().map((item) => {
              return (
                <div
                  className="mr-2 mb-2 img-card"
                  style={{ height: '100px' }}
                  key={item.id}
                >
                  <img
                    alt={item.name}
                    src={item.publicUrl}
                    className="img-thumbnail"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />

                  <div className="img-buttons rounded-bottom">
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() =>
                        this.doPreviewImage(item)
                      }
                    >
                      <i className="la la-search"></i>
                    </button>

                    {!readonly && (
                      <button
                        type="button"
                        className="btn btn-link ml-2"
                        onClick={() =>
                          this.handleRemove(item.id)
                        }
                      >
                        <i className="la la-times"></i>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </ImagesUploaderWrapper>
    );
  }
}

ImagesUploader.propTypes = {
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

export default ImagesUploader;
