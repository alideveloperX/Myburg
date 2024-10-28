import React from 'react'
import './Card.css'
import {products} from './Data'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className='card selected'>
        <div className="img">{props.pimage}</div>
        <h4 className='title'>{props.ptitle}</h4>
        <p className="disc">{props.pdesc.slice(0,50)}</p>
        <h4>Rs:<span className='real'>{props.prprice}</span><span className="bar"></span>Rs:<span className="now">{props.pdprice}</span></h4>
        <button className='b'>Add to Cart</button>

      </div>
    </div>
  )
}

export default Card
