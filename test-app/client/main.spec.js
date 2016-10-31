import React from 'react';
import { chai } from 'meteor/practicalmeteor:chai';
import { mount } from 'enzyme';
import sinon, { spy } from 'sinon';

import Blaze from 'meteor/gadicc:blaze-react-component';
import RealBlaze from 'meteor/blaze';

import { Tracker } from 'meteor/tracker';

import './main.html';

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
  });

  it("re-render when change template", () => {
    spy(Blaze.prototype, 'render');
    const wrapper = mount(<Blaze template="test1" text="OK" />);
    wrapper.setProps({ template: 'test2' });
    Tracker.flush();
    expect(Blaze.prototype.render.calledOnce).to.be.false;
  });

});
