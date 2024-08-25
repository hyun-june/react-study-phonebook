import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const contactList = useSelector(state=>state.contactList);
    const keyword = useSelector(state=>state.keyword);
    const [itemList, setItemList] = useState([]);
    let filterdata = contactList.filter(item => item.name.includes(keyword) || item.phoneNumber.includes(keyword));
        
    useEffect(()=>{
        if(!keyword){
            setItemList(contactList)
        } else{
            setItemList(filterdata)
        }
        console.log(itemList)
    },[contactList,keyword])


  return (
    <div>
        <SearchBox/>
        {itemList.map((item)=><ContactItem item={item}/>)}
    </div>
  )
}

export default ContactList