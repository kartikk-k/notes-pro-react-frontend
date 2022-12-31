import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Workspaces from './pages/Workspaces';
import Subjects from './pages/Subjects';
import Chapters from './pages/Chapters';
import WorkspaceDetailed from './pages/WorkspaceDetailed';
import SubjectDetailed from './pages/SubjectDetailed';
import Editor from './components/Editor';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'

import OpenCloseIcon from './Assets/Icons/Active-icons/Open-CloseIcon.svg'
import AddNewSpace from './components/AddNewSpace';


function App() {
  const [isOpen, setIsOpen] = useState(true)
  const handleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <div className={isOpen ? 'App' : 'App App-full'}>
        {/* Sidebar */}
        {isOpen && (
          <Sidebar />
        )}

        {/* open-close button */}
        <img src={OpenCloseIcon} alt="open-close" className={isOpen ? 'close-btn open-btn' : 'close-btn'} onClick={handleSidebar} />

        {/* main containers */}
        <div className="main-container">
          <Navbar isOpen={isOpen} />

          {/* Content area */}
          <div className="Changable">
            <Routes>
              <Route exact path='/' element={<Editor />} />
              <Route path='/workspaces/' element={<Workspaces />} />
              <Route path='/subjects/' element={<Subjects />} />
              <Route path='/chapters/' element={<Chapters />} />

              <Route path='/workspaces/:workspace_id/' element={<WorkspaceDetailed />} />
              <Route path='/add-workspace/' element={<AddNewSpace />} />
              <Route path='/workspaces/:workspace_id/subjects/:subject_id/' element={<SubjectDetailed />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
