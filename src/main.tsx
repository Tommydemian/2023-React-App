import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
// Components
import Home from './views/Home';
import Collection from './views/Collection';
import Favorites from './views/Favorites';
import Data from './views/Data';
// router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom';
// useQuery
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Root: React.FC = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/collection'>Collection</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/data'>Data</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/data' element={<Data/>} loader={() => axios.get('https://jsonplaceholder.typicode.com/todos')} />
    </Route>
  )  
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
);


