import {CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SELECT_CONTACT, CLEAR_CONTACT,DELETE_SELECTED_CONTACT} from '../Constant/types'
export const addContact = (contact) => ({
      type:CREATE_CONTACT,
      payload:contact,
  })

  //get a contact

  export const getContact = (id) => ({
    type:GET_CONTACT,
    payload:id,
  })
  
  //update contact
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact,
  })
  
  //delete contact
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id,
  })

  //select contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
})
//clear selected contact
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
})


//delete selected contact
export const deletAllcontact = () => ({
  type: DELETE_SELECTED_CONTACT,
  
})
