import React, {useState} from 'react'
import AppBarStore from 'components/appbar'
import Footer from 'components/footer'

function Layout({children}) {
  const [item, setItem] = useState("");
  const itemCallBacks = (e) => {
    console.log("item", e)
  }
console.log("item: ",item)
  return (
    <>
    <AppBarStore itemCallBack={itemCallBacks}/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout