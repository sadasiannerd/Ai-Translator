import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"

export default function Footer() {
  return (
    <div className="flex justify-center space-x-5 py-20 bg-slate-500">
      <AiFillInstagram />
      <BsFacebook />
      <AiFillLinkedin />

    </div>
  )
}
