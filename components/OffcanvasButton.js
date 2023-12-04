import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <svg onClick={handleShow} style={{ backgroundColor: "white", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontWeight:'500', fontSize:'25px', margin:'auto'}}>WJ Best Insulation, LLC</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{listStyle:'none'}}>


            <li style={{textAlign:'center', padding:'30px'}}><a style={{textDecoration:'none', color:'black', fontWeight:'600'}} onClick={handleClose} href="/">HOME</a></li>
            <li style={{textAlign:'center', padding:'30px'}}><a style={{textDecoration:'none', color:'black', fontWeight:'600'}} onClick={handleClose} href="/#servicegrid">SERVICES</a></li>
            <li style={{textAlign:'center', padding:'30px'}}><a style={{textDecoration:'none', color:'black', fontWeight:'600'}} onClick={handleClose} href="/#galleryimg">GALLERY</a></li>
            <li style={{textAlign:'center', padding:'30px'}}><a style={{textDecoration:'none', color:'black', fontWeight:'600'}} onClick={handleClose} href="/#footernav">CONTACT</a></li>


          </ul>



          <div style={{textAlign:'center'}}> Contact: 
          
          <a href="tel:7329101016" style={{textDecoration:'none', marginLeft:'10px'}}>

          (732) 910-1016
          </a>
          
          
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasButton;
