import React from 'react'
import loadImage from "../assets/img/loading.gif";

function Loading() {
  return (
    <div>
      <img src={loadImage} alt="" />
    </div>
  )
}

export default Loading