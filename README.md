# zooid-heading
A React component to render Zooid like headings. This component should be used instead of h1 - h6

[![Build Status](https://travis-ci.org/octoblu/zooid-heading.svg?branch=master)](https://travis-ci.org/octoblu/zooid-heading)
[![npm version](https://badge.fury.io/js/zooid-heading.svg)](http://badge.fury.io/js/zooid-heading)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-heading.png)](https://codeclimate.com/github/octoblu/zooid-heading)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)



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
