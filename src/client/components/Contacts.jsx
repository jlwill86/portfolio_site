import { useGetContactsQuery, useDeleteContactMutation } from "./slices/ContactSlice";
import { useState } from "react";
import { selectToken } from "../auth/AuthSlice";


export default function Contacts() {
  const { data: contacts } = useGetContactsQuery();
  const [displayedContacts, setDisplayedContacts] = useState({});
  const [removeContact] = useDeleteContactMutation();

  const handleDelete = async (id) => {
    try {
      await removeContact(id);
    } catch (error) {
      console.log(error);
    }
  };


  const toggleContact = (id) => {
    setDisplayedContacts(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };


  return (
    <div id="contactMain">
      <h2>Contacts</h2>
      {contacts && contacts.map((contact) => (
        <div key={contact.id} className="contactsMainDiv">
          <div className={`contactDiv ${displayedContacts ? "expanded" : ""}`} >
            <button className="deleteContact" onClick={() => handleDelete(contact.id)}>X</button>
            <h3>{contact.company} </h3>
            {displayedContacts[contact.id] && (
              <div className="contactDetails">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.message}</p>
              </div>
            )}
            <h4 className="hideShow" onClick={() => toggleContact(contact.id)}>{displayedContacts[contact.id] ? "Hide" : "Show"}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}