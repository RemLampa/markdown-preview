import React, { Component } from 'react';

import Header from 'Components/Header';
import MarkdownInput from 'Components/MarkdownInput';
import MarkdownPreview from 'Components/MarkdownPreview';
import Footer from 'Components/Footer';

import style from './style.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownText: ''
    }

    this.onMarkDownInputChange = this.onMarkDownInputChange.bind(this);
  }

  onMarkDownInputChange(text) {
    this.setState({ markdownText: text });
  }

  render() {
    const { markdownText } = this.state;

    return (
      <div>
        <Header />
        <div className="content">
          <MarkdownInput text={ markdownText } handleChange={ this.onMarkDownInputChange }/>
          <MarkdownPreview text={ markdownText }/>
        </div>
        <Footer />
      </div>
    );
  }
}
