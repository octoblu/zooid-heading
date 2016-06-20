import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Heading from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Heading />', () => {
  it('set level prop to 1 if none specified', () => {
    const sut = mount(<Heading />)
    expect(sut).to.have.prop('level', 1)
  })

  describe('when given level as prop', () => {
    it('should render with specified level', () => {
      const level2 = shallow(<Heading level={2} />)
      expect(level2).to.have.className(styles.level2)
    })
  })

  describe('when given children as prop', () => {
    it('should render children', () => {
      const sut = shallow(<Heading><div>CATS</div></Heading>)
      expect(sut).to.contain(<div>CATS</div>)
    })
  })

  describe('when given a className', () => {
    it('should merge the classNames', () => {
      const sut = shallow(<Heading className="classNameOnFleek">Bang!</Heading>)
      expect(sut).to.have.className('classNameOnFleek')
    })
  })

  describe('when given a textAlign prop', () => {
    const leftAligned = mount(<Heading textAlign="left">Left</Heading>)
    const centerAligned = mount(<Heading textAlign="center">Center</Heading>)
    const rightAligned = mount(<Heading textAlign="right">Right</Heading>)

    it('should render given align prop', () => {
      expect(leftAligned).to.have.className(styles['align-left'])
      expect(centerAligned).to.have.className(styles['align-center'])
      expect(rightAligned).to.have.className(styles['align-right'])
    })
  })

  describe('when given an uppercase prop', () => {
    const sut = mount(<Heading uppercase>Uppercase</Heading>)
    it('should render given align prop', () => {
      expect(sut).to.have.className(styles.uppercase)
    })
  })
})
