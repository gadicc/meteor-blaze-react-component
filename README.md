# blaze-react-component [![Circle CI](https://circleci.com/gh/gadicc/meteor-blaze-react-component.svg?style=shield)](https://circleci.com/gh/gadicc/meteor-blaze-react-component)

## Usage

*Use Blaze templates inside of React*


```jsx
import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const App = () => (
  <div>
    <Blaze template="itemsList" items={items} />
  </div>
);
```

**If you want to use Blaze templates from your *app* (as opposed to a package),
make sure you have the `templating` package installed (and not, i.e. the
`static-html` package).**

## Re-exporting

Provided here for those that want it.  Personally I think it's clearer to
use the `<Blaze />` component directly.

```jsx
import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const atForm = (props) => <Blaze {...props} template="atForm" />;

export { atForm };        // import { atForm } from 'myPackage';
```

You can also use a default export if you prefer (and your package
has none of it's own exports, and just a single template).

## Optional and old Meteor support (no ecmascript)

### Blaze package authors, read this.

You might want your package to provide optional React support.  To be honest,
I feel it's clearer to rather give instructions to use the `<Blaze />`
component, as that makes it very clear what's going on.  However, if you
plan to offer native React support in the future, this is a good way to
protect your users from future changes:

**package.js**:
```js
api.use('gadicc:blaze-react-component@1.1.0', 'client', { weak: true });
api.addFiles('somefile.js', 'client');
api.export('YourReactComponent', 'client');
```

**somefile.js**:
```js
YourReactComponent = null;
if (Package['gadicc:blaze-react-component']) {
  var blazeToReact = Package['gadicc:blaze-react-component'].blazeToReact;
  YourReactComponent = blazeToReact('YourBlazeTemplate');
}
```

And then, optionally, but for good practice, tell your users to:

```jsx
import { YourReactComponent } from 'meteor/yourname:yourpackage';

// And use it as expected, with attributes just like in Blaze
const App = () => {
  <div>
    <YourReactComponent textArg="foo" blazeArg=bar />
  </div>
};
```

## Credits

* Inspired by https://github.com/gwendall/meteor-blaze-to-react/.
