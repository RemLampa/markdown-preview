import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import App from 'App/index';

import Header from 'Components/Header';
import MarkdownInput from 'Components/MarkdownInput';
import MarkdownPreview from 'Components/MarkdownPreview';

describe('<App />', () => {
  let wrapper;

  const buildWrapper = () => {
    return shallow(<App />);
  };

  beforeEach(() => {
    wrapper = buildWrapper();
  });

  it('should render a <div> wrapper', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have initial state of markdownText with empty string', () => {
    expect(wrapper.state('markdownText')).to.be.equal('');
  });

  it('should have onMarkDownInputChange method that changes state.markdownText', () => {
    const instance = wrapper.instance(),
      text = 'test test';

    instance.onMarkDownInputChange(text);

    expect(wrapper.state('markdownText')).to.be.equal(text);
  });

  it('should contain one <Header> component', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('should contain one <MarkdownInput> component', () => {
    expect(wrapper.find(MarkdownInput)).to.have.length(1);
  });

  it('should contain <MarkdownPreview> component', () => {
    expect(wrapper.find(MarkdownPreview)).to.have.length(1);
  });
});
