import RootLayout from "./components/root/RootLayout";
import Footer from "./pages/Footer";
import Home from "./pages/Home"
import Service from "./pages/Service"


import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Service" element={<Service/>}></Route>
    <Route path="/Footer" element={<Footer/>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
