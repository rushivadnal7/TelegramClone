import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ChatView from "./Components/ChatView";


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <ChatView/>,
    },
  ]);

  return (
    <>

        <RouterProvider router={Router} />
    </>
  );
}

export default App;
