import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/Topics',
            element:<Topics></Topics>
          },
          {
            path:'/Statistics',
            element:<Statistics></Statistics>
          },
          {
            path:'/Blogs',
            element:<Blogs></Blogs>
          },
          {
            path:'/*',
            element:<Error></Error>
          }
        ]
      }
  ])
  return (
    <div className="App">
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
