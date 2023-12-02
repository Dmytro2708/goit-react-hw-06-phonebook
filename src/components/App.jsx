import { GlobalStyle } from './GlobalStyle';
import { Contacts } from './Contacts/Contacts';
import { NameInput } from './NameInput/NameInput';
import { Filter } from './Filter/Filter';
import { Container } from './GlobalStyle';


export const App = () => {
 
  return (
    <Container>
      <h1>Phonebook</h1>
      <NameInput />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
};

