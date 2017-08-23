import styled from "emotion/react"
import PropTypes from "prop-types"

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
  uppercase: PropTypes.bool,
}

const defaultProps = {
  level: 1,
  textAlign: "left",
  uppercase: false,
}

const fontSizes = {
  "1": "42px",
  "2": "36px",
  "3": "30px",
  "4": "24px",
  "5": "18px",
  "6": "16px",
}

const Heading = styled.div`
  margin-top: 0;
  margin-bottom: 32px;
  line-height: 1.25;
  font-size: ${props => fontSizes[props.level]};
  text-align: ${props => props.textAlign};
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
`

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
