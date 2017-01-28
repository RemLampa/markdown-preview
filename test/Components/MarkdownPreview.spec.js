import React from 'react';
import marked from 'marked';

import chai, { expect } from 'chai';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import MarkdownPreview from 'Components/MarkdownPreview';

chai.use(chaiEnzyme());

describe('<MarkdownPreview />', () => {
  let wrapper,
    spy,
    props;

  const buildWrapper = (props) => {
    return shallow(<MarkdownPreview {...props} />);
  };

  beforeEach(() => {
    props = {
      text: '# test'
    };

    wrapper = buildWrapper(props);
  });

  it('should be a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should render converted markdown text props with marked library', () => {
    const renderedWrapper = render(<MarkdownPreview {...props} />),
      convertedText = marked(props.text);

    expect(renderedWrapper.html()).to.contain(convertedText);
  });
});
