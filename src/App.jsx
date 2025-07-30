import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Index from './routes/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
