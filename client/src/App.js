import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Auth } from './components/Auth';
import UserRecipe from './components/UserRecipe';
import AddRecipe from './components/AddRecipe';
import AllRecipe from './components/AllRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './store/reducer';
import Favourite from './components/Favourite';
import AllRecipeMore from './components/AllRecipeMore';
import TotalDisplay from './components/TotalDisplay';

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  console.log("hI", isLoggedIn)

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(authActions.login())
    }
  }, [dispatch])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        {
          (!isLoggedIn) ? (
            <Route path='/details' element={<Auth />} />
          ) : (
            <>
              <Route path='/' element={<AllRecipeMore />} />
              <Route path='/MyRecipe' element={<UserRecipe />} />
              <Route path='/userRecipe:id' element={<UserRecipe />} />
              <Route path='/addRecipe' element={<AddRecipe />} />
              <Route path='/Recipes' element={<AllRecipe />} />
              <Route path='/favou' element={<Favourite/>} />
              <Route path="/user/:source" element={<TotalDisplay />} />
            </>
          )
        }
      </Routes>
    </>
  );
}





export default App;
