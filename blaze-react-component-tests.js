// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by blaze-react-component.js.
import { name as packageName } from "meteor/blaze-react-component";

// Write your tests here!
// Here is an example.
Tinytest.add('blaze-react-component - example', function (test) {
  test.equal(packageName, "blaze-react-component");
});
