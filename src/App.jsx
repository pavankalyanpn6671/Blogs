import './App.css'
import LoginPage from './Pages/Login/login'
import Register from './Pages/Register/register'
import Home from './Pages/Home'
import NavBar from './Components/Navbar/navbar'
import DedicatedBlog from './Pages/Blog/blog'
import Footer from './Components/Footer'
import { Routes, Route} from 'react-router-dom'
import CategoryBlogPage from './Pages/CategoryBlog/category-blog'
function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/register' element={ <Register />}>
            <Route path='/register/nested-register' element={<>this nested routing</>} />
          </Route>
           <Route path='/category-blog/:categoryName' element={<CategoryBlogPage />} />
          <Route path='/blog/:title' element={ <DedicatedBlog />} />
          <Route path='*' element={<>Page Not Founds</>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
