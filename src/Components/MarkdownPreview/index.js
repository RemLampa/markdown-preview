import React, { PropTypes } from 'react';

import marked from 'marked';

import style from './style.scss';

const MarkdownPreview = ({text}) => {
  const renderMarkdown = () => {
    const convertedText = marked(text);
    return { __html: convertedText };
  };

  return (
    <div className="markdown-preview panel panel-info">
      <div className="panel-heading">Output</div>
      <div className="panel-body" dangerouslySetInnerHTML={renderMarkdown()} />
    </div>
  );
};

MarkdownPreview.propTypes = {
  text: PropTypes.string.isRequired
};

export default MarkdownPreview;
