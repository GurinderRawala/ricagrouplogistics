/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Links from './Links';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { Helmet } from 'react-helmet'

const Head = () =>{
    const [show, setShow ] = useState(false)
    return (
    
    <div style={{backgroundColor: 'black'}}>
         <Helmet>
          <title>Rica Group Logistics | Power Past Borders</title>
        </Helmet>
         <Container>
          <Row>
              <Col md={4} lg={4} xs={12}>
                <img src={ require('../Assets/RGL_LOGO.png') } style={{maxWidth: '100%', height: 150}}/>
                <div className="small_link" onClick={() =>{setShow(!show)}}>{ show? <AiOutlineClose />: <FaBars />}</div>
              </Col>
              <Col md={8} lg={8}> 
               <div className='links'>
               <Links />
               </div>
              </Col>
          </Row>
         {show? <div className='mobile_links'><Links /></div>: null }
      </Container>
    </div>
       
    )
}

export default Head