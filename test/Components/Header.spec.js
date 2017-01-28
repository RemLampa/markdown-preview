import React from 'react';

import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from 'Components/Header';

describe('<Header />', () => {
  let wrapper;

  const buildWrapper = () => {
    return shallow(<Header />);
  };

  beforeEach(() => {
    wrapper = buildWrapper();
  });

  it('should be a div', () => {
    expect(wrapper.type()).to.equal('h1');
  });

  it('should have the text "Markdown Preview"', () => {
    expect(wrapper.text()).to.equal('Markdown Preview');
  });
});
