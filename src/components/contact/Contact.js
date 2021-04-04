import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Contacts from './Contacts'
import {selectAllContact,clearAllContact,deletAllcontact} from '../../actions/contactAction';

const Contact = () => {
  const dispatch = useDispatch();
  const [selectAll,setSelectAll] = useState(false);
    const contacts = useSelector(state => state.contact.contacts);
    const selectedContacts = useSelector(state => state.contact.selectedContact);
    useEffect(() => {
      if(selectAll) {
        dispatch(selectAllContact(contacts.map(contact => contact.id)))
      } else {
        dispatch(clearAllContact());
      }
    },[selectAll])
    console.log(contacts);
    return (
        <div>
          {
            selectedContacts.length > 0 ? (
              <button className="btn btn-danger mb-3" onClick={()=>dispatch(deletAllcontact())}>DeleteAll</button>
            ) : null
          }
            <table className="table shadow">
  <thead>
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox">
              <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} onClick = {() => setSelectAll(!selectAll)} />
              <label htmlFor="selectAll" className="custom-control-label"></label>
          </div>
      </th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
     {contacts.map((contact) => (
        <Contacts contact={contact} key={contact.id} selectAll={selectAll} />
      ))} 
    </tbody>
</table>
</div>
        
);
};

export default Contact;
