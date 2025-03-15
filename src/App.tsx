import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/sign_up" element={<SignUp/>}/>
            </Routes>
        </Router>
    )
}

export default App
