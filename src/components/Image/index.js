import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import images from '@/assets/images/'
import styles from './Image.module.scss'

function Image({ src, alt, className, ...props }, ref) {

  const [fallBack, setFallBack] = useState('')

  const handleError = () => {
    setFallBack(images.noImage)
  }

  return (
    <img
      className={classNames(styles.wrapper, className)}
      {...props}
      src={fallBack || src}
      alt={alt}
      ref={ref}
      onError={handleError}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
}
export default forwardRef(Image)