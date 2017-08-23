import chai, { expect } from "chai"
import chaiEnzyme from "chai-enzyme"
import React from "react"
import sinonChai from "sinon-chai"
import { mount, shallow } from "enzyme"

import Heading from "./"

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe("<Heading />", () => {
  it("set level prop to 1 if none specified", () => {
    const sut = mount(<Heading />)
    expect(sut).to.have.prop("level", 1)
  })

  describe("when given children as prop", () => {
    it("should render children", () => {
      const sut = shallow(
        <Heading>
          <div>CATS</div>
        </Heading>
      )
      expect(sut).to.contain(<div>CATS</div>)
    })
  })

  describe("when given a className", () => {
    it("should merge the classNames", () => {
      const sut = shallow(<Heading className="classNameOnFleek">Bang!</Heading>)
      expect(sut).to.have.className("classNameOnFleek")
    })
  })
})
