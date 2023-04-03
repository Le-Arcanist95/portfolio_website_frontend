// Importing React -- Bring back useContext when ready to implement authentication
import React from 'react';
// Need to bring back Navigation when ready to implement authentication
import { Routes, Route } from 'react-router-dom';

// Context
// import AuthContext from './context/AuthProvider';

// Components
// import RouteProtection from './components/RouteProtection';

// Pages
import Home from './pages/Homepage.js';
// import Auth from './pages/Auth.js';

const App = () => {
    // const { token } = useContext(AuthContext);

    // Replace existing code with this:
        // <Route exact path="/" element={ token ? <Navigate to="/home" /> : <Navigate to="/auth/login" />} />
        // <Route path="/auth/login" element={<Auth />} />
        // <Route path="/home" element={
        //     <RouteProtection>
        //         <Home />    
        //     </RouteProtection>
        // } />
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
}

export default App;