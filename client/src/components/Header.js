import React from 'react'

export default function Header() {
  return (
    <div id="header" className="relative">
    <div  className="text-center py-60 bg-[url('assets/HomeImg.png')] blur-sm mb-20"></div>
    <div className="absolute inset-x-0 top-20 text-center text-stone-50 bg-black">
    <h1 className="text-6xl font-bitter p-5">AI Translator </h1>
    <p className="text-3xl p-5">GPT-Powered Translator</p>
    </div>
    </div>
    
  )
}
