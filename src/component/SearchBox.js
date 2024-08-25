import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBox = () => {
    const [keyword,setKeyword] = useState("");
    const dispatch = useDispatch();
    const searchInfo = (event)=>{
        event.preventDefault()
        dispatch({type:"SEARCHKEYWORD",payload:{keyword}})
    }
  return (
    <div className='search-area'>
        <Form className='input-area' onSubmit={searchInfo}>
            <Form.Control type="text" className='search-text' placeholder="이름이나 번호를 입력하세요." onChange={(event)=>setKeyword(event.target.value)}/>
            <button className='input-btn' type='submit'><FontAwesomeIcon icon={faSearch}/></button>
        </Form>
    </div>
  )
}

export default SearchBox