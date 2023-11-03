
import './App.css';
import RegistrationForm from "./conponents/RegistrationForm";
import ContactForm from "./conponents/ContactForm";
import MailForm from "./conponents/MailForm";
import BookManagement from "./conponents/BookManagement";
import MedicalDeclarationForm from "./conponents/MedicalDeclarationForm";

function App() {
  return (
      <div className="container">
          {/*<RegistrationForm/>*/}
          {/*<ContactForm/>*/}
          {/*<MailForm/>*/}
          {/*<BookManagement/>*/}
          <MedicalDeclarationForm/>
      </div>
  );
}

export default App;
