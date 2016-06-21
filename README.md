# zooid-heading
A React component to render Zooid like headings. This component should be used instead of h1 - h6

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
