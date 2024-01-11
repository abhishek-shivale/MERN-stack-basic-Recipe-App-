import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { Auth } from './pages/Auth'
import SavedRecipes  from './pages/saved-recipe'
import { CreateRecipe } from './pages/create-recipe'
import { Navbar } from './components/navbar'
import './App.css'
export default function App() {

  return (
    <>
    <div className="app">

    </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/auth' element={<Auth/>}  />
        <Route path='/saved-recipes' element={<SavedRecipes/>}  />
        <Route path='/create-recipe' element={<CreateRecipe/>}  />
      </Routes>
    </Router>
    </>
  )
}

