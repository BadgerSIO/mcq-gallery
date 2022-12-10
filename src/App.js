import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {path:'/',
      loader: async()=>{
       return fetch(`https://openapi.programming-hero.com/api/quiz`);
      },
      element:<Home></Home>},
      {
        path:'/statistics',
        loader: async()=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
         },
        element:<Statistics></Statistics>
      },
      {
        path:'/quiz/:id',
        loader:async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Quiz></Quiz>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ]
  },
])
function App() {
  

  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
