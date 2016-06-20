import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  uppercase: PropTypes.bool,
}

const defaultProps = {
  level: 1,
  textAlign: 'left',
  uppercase: false,
}

const Heading = ({ children, className, level, textAlign, uppercase }) => {
  const classes = classNames(
    styles[`level${level}`],
    styles[`align-${textAlign}`],
    { [`${styles.uppercase}`]: uppercase },
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Heading.propTypes    = propTypes
Heading.defaultProps = defaultProps

export default Heading
