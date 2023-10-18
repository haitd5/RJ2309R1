import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert/Alert';
import StudenInfo from './components/StudenInfo/StudenInfo';

function App() {
    return (
        <div className="container my-3 p-5">
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
            <StudenInfo />
        </div>
    );
}

export default App;
