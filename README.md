# zooid-heading
A React component to render Zooid like headings. This component should be used instead of h1 - h6

[![Build Status](https://travis-ci.org/octoblu/zooid-heading.svg?branch=master)](https://travis-ci.org/octoblu/zooid-heading)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-heading/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-heading)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-heading.svg?style=flat)](https://david-dm.org/octoblu/zooid-heading)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-heading.svg?style=flat)](https://david-dm.org/octoblu/zooid-heading#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-heading.svg?style=flat)](https://npmjs.org/package/zooid-heading)




### Install
```
npm install --save zooid-heading
```
### Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| className | string |         | Additional css classes for your heading|
| level     | number |    1    | Numerical value from 1 - 6 (1 being the largest)|
| textAlign | string |  left   | Sets text-align property. Options: **left**, **right**, **center** |
| uppercase | boolean|  false  | DOES THIS |


### Example
```jsx
<Heading level={1}>Level 1 Header</Heading>
<Heading uppercase>Uppercase Header</Heading>
<Heading textAlign="center">Header - Text Aligned Center</Heading>
```
