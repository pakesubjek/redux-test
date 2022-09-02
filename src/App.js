import './App.css';
import { Routes, Route } from 'react-router-dom';
import FormikYup from './pages/formik';
import Home from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormikYup />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
