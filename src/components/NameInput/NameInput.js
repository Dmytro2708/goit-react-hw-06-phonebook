import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm } from './NameInput.styled';
import * as Yup from 'yup';

const NameInputSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Name is required'),
  number: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, 'Invalid phone number format')
    .required('Must be filled'),
});

export const NameInput = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      contact => contact.name === newContact.name
    );

    if (hasContact) {
      alert('A contact with that name already exists');
      return;
    }

    dispatch(addContact(newContact));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={NameInputSchema}
      onSubmit={(values, actions) => {
        addNewContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
