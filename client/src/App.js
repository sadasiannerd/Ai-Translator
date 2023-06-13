import { Home, Error } from "./pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
