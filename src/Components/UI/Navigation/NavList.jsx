import React from 'react'
import classes from "./Nav.module.css"
const Nav = ({children}) => {
  return (
    <div className='flex justify-center'>
      <nav className={`${classes.nav} rounded-full`}>
        {children}
      </nav>
    </div>
  )
}


Nav.Heading = ({children,className,...props})=>{
  return <h3 className={`${classes.heading} ${className || ""}`} {...props}>
    {children}
  </h3>
}

Nav.NavLinks = ({children,className,...props})=>{
  return <ul className={`${classes["nav-links"]} ${className || ""} flex`} {...props}>
    {children}
  </ul>
}

export default Nav;