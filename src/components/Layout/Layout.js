import React from 'react'
import Header from '../Header/Header'

// import classes from "./Layout.module.scss"

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default Layout