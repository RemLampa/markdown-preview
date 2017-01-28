import React, { Component, PropTypes } from 'react';

import './style.scss';

const MarkdownInput = ({ text, handleChange }) => {
  const handleTextAreaChange = (event) => {
    handleChange(event.target.value);
  }

  return (
    <form>
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
