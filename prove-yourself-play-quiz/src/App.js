import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            loader: async () =>{
              return fetch('https://openapi.programming-hero.com/api/quiz');
            } ,
            element:<Topics></Topics>
          },
          {
            path:'/Statistics',
             loader: async () =>{
              return fetch('https://openapi.programming-hero.com/api/quiz');
            } ,
            element:<Statistics></Statistics>
          },
          {
            path:'/Blogs',
            element:<Blogs></Blogs>
          },
          {
            path:'/quiz/:quizId',
            loader: async ({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
            },
            element:<Quiz></Quiz>
          }
        ]
      },
      {
        path:'/*',
        element:<Error></Error>
      }
  ])
  return (
    <div className="App">
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
