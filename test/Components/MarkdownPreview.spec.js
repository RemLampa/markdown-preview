import React from 'react';
import marked from 'marked';

import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MarkdownPreview from 'Components/MarkdownPreview';

describe('<MarkdownPreview />', () => {
  let wrapper,
    spy,
    props;

  const buildWrapper = (props) => {
    return shallow(<MarkdownPreview {...props} />);
  };

  beforeEach(() => {
    props = {
      text: 'test'
    };

    spy = sinon.spy(marked, 'call');

    wrapper = buildWrapper(props);
  });

  afterEach(() => {
    spy.restore();
  });

  it('should be a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should render converted markdown text props with marked library', () => {
    const convertedText = marked(props.text);

    expect(wrapper.html()).to.equal('<div>' + convertedText + '</div>');
  });


});
