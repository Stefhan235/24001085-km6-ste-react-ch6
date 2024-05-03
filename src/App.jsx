import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/navbar";
import Login from "./page/login";
import Register from "./page/register";
import Home from "./page/home";
import Profile from "./page/profile";
import Protected from "./components/protected";
import NonProtected from "./components/nonProtected";
import CarDetail from "./page/car";
import CreateCar from "./page/createCar";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Navbar />
                <Home />
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <Navbar />
                <Login />
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <Navbar />
                <Register />
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected>
                <Navbar />
                <Profile />
            </Protected>
        ),
    },
    {
        path: "/car/:id",
        element: (
            <Protected>
                <Navbar />
                <CarDetail />
            </Protected>
        ),
    },
    {
        path: "/car/create",
        element: (
            <Protected>
                <Navbar />
                <CreateCar />
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
