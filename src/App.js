import './App.css';
import { Routes, Route } from 'react-router-dom';
import FormikYup from './pages/formik';

function App() {
  return (
    <Routes>
    <Route path="/" element={<FormikYup />} />
    </Routes>
  );
}

export default App;
