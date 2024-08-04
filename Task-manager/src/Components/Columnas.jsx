import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { DndContext, useDroppable, useDraggable, closestCenter } from '@dnd-kit/core';
import Cards from './Cards';
import NewTask from './NewTask';
import './Recuadro.css';

function Columnas({ showAlert, setAlert }) {
  const [columns, setColumns] = useState({
    'to-do': [],
    'in-progress': [],
    'in-review': [],
    'done': [],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId !== overId) {
      let sourceColumn = null;
      let sourceIndex = null;

      for (const column in columns) {
        const index = columns[column].findIndex(task => task.id === activeId);
        if (index !== -1) {
          sourceColumn = column;
          sourceIndex = index;
          break;
        }
      }

      if (sourceColumn !== null && overId !== undefined) {
        const newColumns = { ...columns };
        const [movedTask] = newColumns[sourceColumn].splice(sourceIndex, 1);
        newColumns[overId].push(movedTask);

        setColumns(newColumns);
      }
    }
  };

  const addNote = (newTask) => {
    const newTaskWithId = { ...newTask, id: String(Date.now()) };
    setColumns(prevColumns => ({
      ...prevColumns,
      'to-do': [...prevColumns['to-do'], newTaskWithId],
    }));
    setAlert(false);
  };

  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="columnas">
          {Object.keys(columns).map(columnId => (
            <DroppableColumn key={columnId} columnId={columnId} tasks={columns[columnId]} />
          ))}
        </div>
      </DndContext>
      {showAlert && <NewTask addNote={addNote} onClose={() => setAlert(false)} />}
    </>
  );
}

function DroppableColumn({ columnId, tasks }) {
  const { setNodeRef } = useDroppable({ id: columnId });

  return (
    <div ref={setNodeRef} className="droppable-column">
      <ListGroup horizontal className="listg">
        <ListGroup.Item className="column-header">{columnId.replace('-', ' ')}</ListGroup.Item>
      </ListGroup>
      <div className="list-drp">
        {tasks.map(task => (
          <DraggableTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

function DraggableTask({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Cards id={task.id} title={task.title} note={task.note} />
    </div>
  );
}

export default Columnas;
