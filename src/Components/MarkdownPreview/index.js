import React, { Component } from 'react';

class MarkdownPreview extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default MarkdownPreview;
