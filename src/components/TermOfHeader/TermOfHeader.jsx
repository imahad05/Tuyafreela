import React from 'react'
import './TermOfHeader.css'
import { assets } from '../../assets/assets'

const TermOfHeader = ({title}) => {
  return (
    <div className='term-of-uses'>
    <div className="term-of-uses-header">
      <div className="term-of-uses-header-bg"></div>
      <img src={assets.Shape} alt="" className="term-of-uses-shape-one"/>
      <h1 className="term-of-uses-heading">{title}</h1>
      <img src={assets.Shape} alt="" className="term-of-uses-shape-two"/>
    </div>
    </div>
  )
}

export default TermOfHeader