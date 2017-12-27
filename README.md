# chmod-style-permissions
A node module to make user permissions simple

### Installation
Using NPM, type:
```
npm install --save chmod-style-permissions
```
to install. This package is not yet available for the browser.

Then, add to the top of your code:
```js
var csp = require("chmod-style-permissions")
```

### Usage

The main function, `csp.hasPerm()`, takes 2 arguments; an array of a user's permissions, and a node to check against.

#### Examples:
```js
csp.hasPerm([
  "bot.kick",
  "bot.ban",
  "bot.nicknames.*"
], "bot.nicknames.change")
// → true

csp.hasPerm([
  "bot.kick",
  "bot.ban",
  "bot.nicknames.*"
], "bot.restart")
// → false
```

### Author & license

This was written by Jay Williams. You are granted permission to use this in your code as /LICENSE states. If you fork this and edit it, a pull request would be greatly appreciated!