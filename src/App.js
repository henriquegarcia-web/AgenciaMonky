import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BriefingPage from './Pages/Briefing';
import HomePage from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' exact element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />

          <Route path='/briefing' element={<BriefingPage />} />

          <Route path='*' element={<HomePage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
