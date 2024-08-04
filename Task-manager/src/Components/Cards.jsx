import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDraggable } from '@dnd-kit/core';
import ImgA from './ImgAvatar';
import './Recuadro.css'

function Cards({ id, title, note }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id, // Usa el ID dinámico proporcionado
  });

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className='Card-container'
    >
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-p'>{note}</Card.Text>
      </Card.Body>
        <ImgA />
    </Card>
  );
}

export default Cards;
