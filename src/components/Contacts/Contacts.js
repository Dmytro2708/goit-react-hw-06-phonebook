import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactsList, ContactEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(item => {
    const hasContact = item.name.toLowerCase().includes(filters.toLowerCase());

    return hasContact;
  });

  return (
    <ContactsList>
      {filteredContacts.map(e => (
        <ContactEl key={e.id}>
          <p>
            {e.name}: {e.number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(e.id))}>
            Delete
          </button>
        </ContactEl>
      ))}
    </ContactsList>
  );
};
