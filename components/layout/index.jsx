import React from 'react'
import AppBarStore from 'components/appbar'
import Footer from 'components/footer'

function Layout({children}) {
  return (
    <>
    <AppBarStore/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout