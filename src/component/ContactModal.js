import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons"

const ContactModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState("")

  const dispatch = useDispatch();
  const genderSelect = (event,gender) =>{
    event.preventDefault();
    setGender(gender)
  }
  const addContact = (event) => {
    event.preventDefault();
    if(name === "" && phoneNumber === ""){
        alert("내용을 입력해주세요.")
    } else if(phoneNumber === ""){
        alert("전화번호를 입력해주세요.")
    } else if(name === ""){
        alert("이름을 입력해주세요.")
    } else{
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber,gender } });
        handleClose();
        setName('');
        setPhoneNumber('');
        setGender('');
    }
  };

  return (
    <div>
      <button className="plus-btn" onClick={handleShow}>
        +
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>연락처 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>이름</Form.Label>
              <Form.Control
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>전화번호</Form.Label>
              <Form.Control
                type="number"
                placeholder="전화번호를 입력해주세요."
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Form.Group>
            <div>
                <button className={gender === 'male' ? 'male active' : 'male'} onClick={(event)=>genderSelect(event,'male')}><FontAwesomeIcon icon={faMars}/></button>
                <button className={gender === 'female' ? 'female active' : 'female'} onClick={(event)=>genderSelect(event,'female')} ><FontAwesomeIcon icon={faVenus}/></button>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
