import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Blaze } from 'meteor/blaze';
import { ReactiveVar } from 'meteor/reactive-var';

const BlazeComponent = (props) => {
  const html = {
    __html: Blaze.toHTMLWithData(
      props.template,
      _.omit(props, 'template')
   )
  };

  return ( <span dangerouslySetInnerHTML={html} /> );
}

blazeToReact = function(template) {
  return (props) => <BlazeComponent {...props} template={template} />;
}

export { blazeToReact };
export default BlazeComponent;
