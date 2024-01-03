import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Transcation from "./pages/Transcation";
import Support from "./pages/Support";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Auth/Singup/Signup";
import Login from "./pages/Auth/Signin/Login";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/transcation",
      element: (
        <ProtectedRoute>
          <Transcation />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <Support />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <Signup />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <Login />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verification/:email",
      element: (
        <AlreadySigninRoute>
          <RegisterEmailVerify />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",

      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <AlreadySigninRoute>
          <ForgotPassword />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-sent/:email",
      element: (
        <AlreadySigninRoute>
          <ForgotPasswordSent />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          <ResetPassword />,
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/reset-password-success",
      element: (
        <AlreadySigninRoute>
          <ResetPasswordSuccess />,
        </AlreadySigninRoute>
      ),
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
