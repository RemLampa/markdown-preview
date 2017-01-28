import React, { PropTypes } from 'react';

import style from './style.scss';

const MarkdownInput = ({ text, handleChange }) => {
  const handleTextAreaChange = (event) => {
    handleChange(event.target.value);
  }

  return (
    <form className="markdown-input">
      <textarea
        className="form-control"
        value={text}
        onChange={handleTextAreaChange}
      />
    </form>
  );
}

MarkdownInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MarkdownInput;
