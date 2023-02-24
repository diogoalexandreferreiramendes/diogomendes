import './Curriculo.css'
import React, { useState } from 'react';
import curriculo from '../images/curriculo.png'


const Curriculo = () => {


  return (
    <div>
        <div id="div_image">
            <img src={curriculo} id="curriculo_imagem"/>
        </div>
    </div>
  )
}

export default Curriculo