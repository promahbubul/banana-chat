import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ChatDashboard from "../pages/ChatDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatDashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
