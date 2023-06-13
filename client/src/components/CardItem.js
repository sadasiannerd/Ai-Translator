import React from 'react'

export default function CardItem({img, who, description}) {
  return (
    <div className="text-center space-y-5">
      <img className="w-56 h-60" src={img}/>
      <p>{who}</p>
      <p>{description}</p>
    </div>
  )
}
