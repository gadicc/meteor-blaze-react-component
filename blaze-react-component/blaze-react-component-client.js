import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Blaze } from 'meteor/blaze';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

class BlazeComponent extends Component {

  componentDidMount() {
    this.renderBlazeView();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.template != this.props.template) {
      Blaze.remove(this._blazeView);
      this.renderBlazeView();
    }
  }

  renderBlazeView() {
    this._blazeData = new ReactiveVar(_.omit(this.props, 'template'));

    let template, tArg = this.props.template;
    if (typeof tArg === 'string') {
      template = Template[tArg];
      if (!template)
        throw new Error(`No Template["${tArg}"] exists.  If this template `
          + "originates in your app, make sure you have the `templating` "
          + "package installed (and not, for e.g. `static-html`)");
    } else if (tArg instanceof Blaze.Template) {
      template = tArg;
    } else {
        throw new Error("Invalid template= argument specified.  Expected "
          + "the string name of an existing Template, or the template "
          + "itself, instead got ''" + typeof tArg + ": "
          + JSON.stringify(tArg));
    }

    this._blazeView = Blaze.renderWithData(
      template,
      () => this._blazeData.get(),
      ReactDOM.findDOMNode(this._blazeRef)
    );
  }

  shouldComponentUpdate(nextProps) {
    // Never call render() for props except template again; Blaze will do what's necessary.
    return nextProps.template !== this.props.template;
  }

  componentWillReceiveProps(nextProps) {
    this._blazeData.set(_.omit(nextProps, 'template'));
  }

  componentWillUnmount() {
    Blaze.remove(this._blazeView);
  }

  render() {
    return ( <span className={this.props.className || ''} ref={(c) => this._blazeRef = c} /> );
  }

}

blazeToReact = function(template) {
  return (props) => <BlazeComponent {...props} template={template} />;
}

export { blazeToReact };
export default BlazeComponent;
