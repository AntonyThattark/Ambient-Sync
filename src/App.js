import Face from './face';
import Test from './test';
// import Loader from './loader';
// import logo from './logo.svg';
// import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Face/> 
  },
  {
    path: "/test",
    element: <Test/>
  }
  // {
  //   path: "/register",
  //   element: <Register/> ,
  // },
  // {
  //   path: "/forgotpassword",
  //   element: <ForgotPassword/>,
  // },
  // {
  //   path: "/trainerlogin",
  //   element: <Trainerlogin/>,
  // }
]);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <RouterProvider router={router} />


  );
}

export default App;
