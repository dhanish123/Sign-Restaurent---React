import React, { useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restoperation({operate}) {
    console.log({operate});
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const orderedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const hours = useMemo(() => {
    if (!operate) return []
    return orderedDays.map(day => ({ day, value: operate[day] || '—' }))
  }, [operate])

  const todayIdx = new Date().getDay(); // 0 Sun .. 6 Sat
  const todayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][todayIdx]

  return (
    <>
        
            <Button variant="dark" onClick={handleShow}>
            Operating Hours
          </Button>
    
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Operating Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: 'transparent' }}>
            <ListGroup>
      {hours.map((row) => (
        <ListGroup.Item key={row.day} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: row.day===todayName ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
          color: 'inherit'
        }}>
          <span style={{ fontWeight: row.day===todayName ? 600 : 500 }}>{row.day}</span>
          <span style={{ color: 'var(--color-muted)' }}>{row.value}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
            </Modal.Body>
            
          </Modal>
        
    </>
  )
}

export default Restoperation