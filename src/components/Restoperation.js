import React, { useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

function Restoperation({operate}) {
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
            <div className="operating-hours-display">
                <div className="hours-summary">
                    <div className="today-hours">
                        <FontAwesomeIcon icon={faCalendarDay} className="today-icon" />
                        <span className="today-label">Today's Hours:</span>
                        <span className="today-time">
                            {operate && operate[todayName] ? operate[todayName] : 'Closed'}
                        </span>
                    </div>
                    <Button variant="outline-primary" onClick={handleShow} className="view-all-btn">
                        <FontAwesomeIcon icon={faClock} /> View All Hours
                    </Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton className="modal-header-custom">
                    <Modal.Title>
                        <FontAwesomeIcon icon={faClock} /> Operating Hours
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-custom">
                    <ListGroup className="hours-list">
                        {hours.map((row) => (
                            <ListGroup.Item 
                                key={row.day} 
                                className={`hours-item ${row.day === todayName ? 'today-highlight' : ''}`}
                            >
                                <div className="day-info">
                                    <span className="day-name">{row.day}</span>
                                    {row.day === todayName && (
                                        <span className="today-badge">Today</span>
                                    )}
                                </div>
                                <span className="hours-time">{row.value}</span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Restoperation