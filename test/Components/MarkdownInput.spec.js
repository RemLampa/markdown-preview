import React from 'react';

import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';

import MarkdownInput from 'Components/MarkdownInput';

chai.use(chaiEnzyme());

describe('<MarkdownInput />', () => {
  let wrapper,
    props;

  const buildWrapper = (props) => {
    return shallow(<MarkdownInput {...props} />);
  };

  beforeEach(() => {
    props = {
      text: 'test',
      handleChange: sinon.spy()
    }
    wrapper = buildWrapper(props);
  });

  it('should be a form element', () => {
    expect(wrapper.type()).to.equal('form');
  });

  it('should contain textarea element with appropriate value', () => {
    expect(wrapper.children()).to.have.length(1);
    expect(wrapper.children().first().type()).to.equal('textarea');
    expect(wrapper.find('textarea')).to.have.value(props.text);
  });

  it('should call passed function when textarea changes with proper arguments', () => {
    const newValue = 'test test';

    wrapper.find('textarea').simulate('change', { target: { value: newValue }});

    expect(props.handleChange.calledOnce).to.be.true;

    expect(props.handleChange.calledWith(newValue)).to.be.true;
  });
});
