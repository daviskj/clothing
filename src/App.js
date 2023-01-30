import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/home/navigation/navigation.component';

import Home from './routes/home/home.component';





const Shop = () => {
  return <h1> aint shit here yet to shop fer</h1>
  
}

const App = () => {
return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={ <Home /> } /> 
      <Route path='shop' element={ <Shop /> } />
    </Route>
  </Routes>
  )
   // '/' makes the nav bar persistent on every page
   // index sets the given route as home
};

export default App;
