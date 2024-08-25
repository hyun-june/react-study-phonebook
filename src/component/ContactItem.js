import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons"

const ContactItem = ({item}) => {
  return (
    <Row className='contact-item'>
        <Col lg={2} md={2} className='item-img'>
            {item.gender? item.gender === 'male'? (<img width={70} src="malemokoko.png" alt="" />)
            : (<img width={70} src="femalemokoko.png" alt="" />)
            : (<img width={70} src="mokoko.png" />)}
        </Col>
        <Col lg={1} md={1} className='item-gender'>
            {item.gender ? (item.gender === 'male' ? <FontAwesomeIcon color='blue' icon={faMars}/> : <FontAwesomeIcon color='red' icon={faVenus}/>) : ""}
        </Col>
        <Col lg={3} md={3} className='item-info'>
            <div>
                {item.name}
            </div>
        </Col>
        <Col lg={6} md={6} className='item-info'>
            <div>
                {item.phoneNumber}
            </div>
        </Col>

    </Row>
  )
}

export default ContactItem