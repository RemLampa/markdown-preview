import React, { Component, PropTypes } from 'react';

import marked from 'marked';

const MarkdownPreview = ({text}) => {
  const renderMarkdown = () => {
    const convertedText = marked(text);
    return { __html: convertedText };
  };

  return <div dangerouslySetInnerHTML={renderMarkdown()} />
};

MarkdownPreview.propTypes = {
  text: PropTypes.string.isRequired
};

export default MarkdownPreview;
