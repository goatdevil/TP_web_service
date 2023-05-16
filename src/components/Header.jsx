import React from 'react'
import './Header.css'
export default function Header() {
  return(
      <div className={'appBar'}>
          <img className={'Logo'} src={'./logo.png'} alt="logo"/>
          <h1 id={'Title_header'}>TP_Web_Service</h1>
      </div>

  )
}
