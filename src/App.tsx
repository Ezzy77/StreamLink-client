import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Login from "./Login.tsx";
import Chats from "./Chats.tsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/chats" element={<Chats />} />
            </Routes>
        </Router>
    );
}

export default App;