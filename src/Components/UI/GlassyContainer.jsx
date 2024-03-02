import React from 'react'

const GlassyContainer = ({children, fill, className}) => {
  return (
    <div fill={fill || "purple"} className={' w-fit glassy-bg p-6 round ' + (className || "")}>
      {children}
    </div>
  )
}

export default GlassyContainer