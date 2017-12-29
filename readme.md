# babel-plugin-react-remove-classname

[![Build Status](https://travis-ci.org/akameco/babel-plugin-react-remove-classname.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-react-remove-classname)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> babel plugin for remove classname

## Install

npm:

```
$ npm install --save-dev babel-plugin-react-remove-classname
```

yarn:

```
$ yarn add --dev babel-plugin-react-remove-classname
```

## Usage

.babelrc

```js
{
  "plugins": ["react-remove-classname"]
}
```

### Options

### prefix

Default: `test-` <br>

## Examples

```js
const hello = () => <div className="test-a hello test-b"></div>

      ↓ ↓ ↓ ↓ ↓ ↓

const hello = () => <div className="hello"></div>
```

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-react-remove-classname/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-react-remove-classname/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-react-remove-classname/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
