import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Background from "./components/Background"
import { Register, Error, ProtectedRoute } from './pages'
import { Profile } from './pages/dashboard'

function App() {
  return (

    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Landing />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
