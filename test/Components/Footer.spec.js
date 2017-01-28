import React from 'react';

import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import Footer from 'Components/Footer';

chai.use(chaiEnzyme());

describe('<Footer />', () => {
  let wrapper;

  const buildWrapper = () => {
    return shallow(<Footer />);
  }

  beforeEach(() => {
    wrapper = buildWrapper();
  });

  it('should be a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should render link to GitHub repository', () => {
    expect(wrapper.find('a')).to.have.attr('href', 'https://github.com/ibleedfilm/markdown-preview');
  });
});
