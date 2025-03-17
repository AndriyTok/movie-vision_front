import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp.tsx";
import SignIn from "./pages/SignIn.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/sign_up" element={<SignUp/>}/>
                <Route path="/sign_in" element={<SignIn/>}/>
            </Routes>
        </Router>
    )
}

export default App
