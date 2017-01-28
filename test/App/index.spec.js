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

  it('should have a <Header> component', () => {
    expect(wrapper.contains(<Header />)).to.be.true;
  });

  it('should have a <MarkdownInput> component', () => {
    expect(wrapper.contains(<MarkdownInput />)).to.be.true;
  });

  it('should have a <MarkdownPreview> component', () => {
    expect(wrapper.contains(<MarkdownPreview />)).to.be.true;
  });
});
