import './App.css';
import FormRegister from './components/FormContact/FormContaxt';
import Profile from './components/Profile/Profile';
import JobList from './components/JobLIst/JobList';
import Heading from './components/Heading/Heading';

function App() {
    return (
        <div className="container mt-3 vh-100">
            <Heading color="red" backgroundColor="green">
                Love you my friend
            </Heading>
            <Heading color="yellow" backgroundColor="blue">
                Love you my family
            </Heading>
            <FormRegister />
            <Profile />
            <JobList />
        </div>
    );
}

export default App;
