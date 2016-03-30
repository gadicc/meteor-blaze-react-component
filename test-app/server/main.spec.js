import { chai } from 'meteor/practicalmeteor:chai';
import sinon, { spy } from 'sinon';
import { render } from 'enzyme';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Meteor } from 'meteor/meteor';
import { Blaze as RealBlaze } from 'meteor/blaze';

import Blaze from 'meteor/gadicc:blaze-react-component';

const { assert, expect } = chai;

/* --- TODO, server side importer --- */

const Template = RealBlaze.Template;

Template["test1"] = new Template("Template.test1", (function() {
  var view = this;
  return "OK";
}));

Template["test2"] = new Template("Template.test2", (function() {
  var view = this;
  var Blaze = RealBlaze;
  return Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  });
}));

/* --- */

describe('blaze-react-component', () => {

  it('renders', () => {
    const wrapper = render(<Blaze template={Template.test1} />);
    expect(wrapper.text()).to.equal('OK');
  });

  it('passes through props', () => {
    const wrapper = render(<Blaze template={Template.test2} text="OK" />);
    expect(wrapper.text()).to.equal('OK');
  });

});