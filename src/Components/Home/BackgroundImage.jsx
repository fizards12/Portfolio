import React from 'react'
const BackgroundImage = ({src,alt,className, ...props}) => {
  return (
    <img className={className}  src={src} alt={alt} {...props} />
  )
}

export default BackgroundImage