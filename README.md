# meteor-blaze-react-component

Use Blaze templates inside of React.

```jsx
import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

const App = () => (
  <div>
    <Blaze template="itemsList" items={items} />
  </div>
);
```

## Re-exporting

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
