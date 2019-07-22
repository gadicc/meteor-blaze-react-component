# blaze-react-component [![Circle CI](https://circleci.com/gh/gadicc/meteor-blaze-react-component.svg?style=shield)](https://circleci.com/gh/gadicc/meteor-blaze-react-component) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

*Use Blaze templates inside of React*

Copyright (c) 2016 by Gadi Cohen <dragon@wastelands.net> and released under the
MIT license (see [LICENSE.txt](./LICENSE.txt)).  Many thanks to all our
[contributors](https://github.com/gadicc/meteor-blaze-react-component/graphs/contributors).

## Installation

```
meteor add gadicc:blaze-react-component
```

## Usage

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

Your Blaze template will be rendered into a `<span>` tag.  If needed, you can
specify a `className` attribute, i.e.

```html
<Blaze template="myTemplate" className="myClass" />
```

renders to:

```html
<span class="myClass">myTemplate content</span>
```

## Troubleshooting

1. **Uncaught Error: No Template["xxx"] exists**

  If your template `xxx` exists in a `.html` file inside your `client` directory, Meteor won't automatically import it, and you should `import` it from the same react `.js` file where you need it, e.g.

  ```js
  // This file contains <template name="xxx">
import './xxx.html';

  const App = () => <Blaze template="xxx" />;
  ```

2. **Uncaught Error: Target container is not a DOM element.**

  Import your "main" template file that contains your react render target (e.g. `<div id="render-target" />`) before any initial render code, i.e.

  ```js
  // Add this:
  import './main.html';

  Meteor.startup(...);
  ```

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
