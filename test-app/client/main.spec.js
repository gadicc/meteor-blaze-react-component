import React from 'react';
import chai from 'chai';
import sinon, { spy } from 'sinon';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Blaze from 'meteor/gadicc:blaze-react-component';
import RealBlaze from 'meteor/blaze';

import { Tracker } from 'meteor/tracker';

import './main.html';

Enzyme.configure({ adapter: new Adapter() });
const { assert, expect } = chai;

describe('blaze-react-component', () => {

  it('mounts and renders a string name', () => {
    const wrapper = mount(<Blaze template="test1" />);
    expect(wrapper.text()).to.equal('OK');
  });

  it('mounts and renders a passed-in template', () => {
    const wrapper = mount(<Blaze template={Template.test1} />);
    expect(wrapper.text()).to.equal('OK');
  });

  // the error is thrown but becasue of fibers it's now thrown globally
  // and we need to figure out a better way to test it.
  if (0)
  it('throws an error on invalid template= arg', () => {
    expect(
      function() { mount(<Blaze template={{invalid: true}} />) }
    ).to.throw();
  });

  it('passes through props', () => {
    const wrapper = mount(<Blaze template="test2" text="OK" />);
    expect(wrapper.text()).to.equal('OK');
  });

  it('reactively updates props (via Blaze)', () => {
    const wrapper = mount(<Blaze template="test2" text="OK1" />);
    expect(wrapper.text()).to.equal('OK1');
    wrapper.setProps({ text: 'OK2' });
    Tracker.flush();
    expect(wrapper.text()).to.equal('OK2');
  });

  it("doesn't re-render when updating props", () => {
    spy(Blaze.prototype, 'render');
    const wrapper = mount(<Blaze template="test2" text="OK1" />);
    wrapper.setProps({ text: 'OK2' });
    Tracker.flush();
    expect(Blaze.prototype.render.calledOnce).to.be.true;
    // Unwrap the spy
    Blaze.prototype.render.restore();
  });

  it("re-render when change template", () => {
    spy(Blaze.prototype, 'render');
    const wrapper = mount(<Blaze template="test1" text="OK" />);
    wrapper.setProps({ template: 'test2' });
    Tracker.flush();
    expect(Blaze.prototype.render.calledOnce).to.be.false;
    // Unwrap the spy
    Blaze.prototype.render.restore();
  });

});
