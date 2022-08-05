import React from 'react';
import '../CSS/Card.css';

function Card (props){
  return (
    <div className='contenedor-card'>
      <img 
        className='imagen-card'
        src={require(`../Imagenes/heroe-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`} />
      <div className='contenedor-texto-card'>
        <p className='nombre-heroe'><strong>{props.nombre}</strong></p>
        <p className='creador-heroe'><b>{props.creador}</b></p>
        <p className='descripcion-heroe'>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;