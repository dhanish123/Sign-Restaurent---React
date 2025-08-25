import React,  { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import StarRating from './StarRating'


function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
console.log(reviews); 
  return (
   
         <><Button variant="dark"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
              >
                  click to see reviews
              </Button><Collapse in={open}>
                      <div id="example-collapse-text">
                        {
                            reviews.map(item=>(
                                <div style={{
                                  background:'rgba(255,255,255,0.04)',
                                  border:'1px solid rgba(255,255,255,0.08)',
                                  borderRadius:12,
                                  padding:'12px 16px',
                                  marginTop:12
                                }}>
                                    <p style={{ marginBottom: 6 }}><strong>{item.name}</strong> <span style={{ color: 'var(--color-muted)', marginLeft: 8 }}>{item.date}</span></p>
                                    <div style={{ marginBottom: 8 }}><StarRating value={item.rating} /></div>
                                    {item.comments && <p style={{ color: 'var(--color-muted)' }}>{item.comments}</p>}
                                </div>
                            ))
                        }
                      </div>
                  </Collapse></>
    
  )
}

export default Restreview