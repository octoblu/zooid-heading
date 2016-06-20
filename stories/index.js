import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Heading from '../src'

storiesOf('Heading', module)
  .add('Default', () => (
    <Heading>Default Heading Level </Heading>
  ))
  .add('Sizes', () => (
    <div>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ))
  .add('Alignment', () => (
    <div>
      <Heading>Heading Alignment Default</Heading>
      <Heading textAlign="left">Heading Alignment Left</Heading>
      <Heading textAlign="center">Heading Alignment Center</Heading>
      <Heading textAlign="right">Heading Alignment Right</Heading>
    </div>
  ))
  .add('Uppercase', () => {
    <Heading uppercase>Uppercase Heading</Heading>
  })
