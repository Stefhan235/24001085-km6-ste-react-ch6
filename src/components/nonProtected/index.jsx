import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/actions/auth";

const nonProtected = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile(navigate, "/", null));
    }, [dispatch, navigate]);

    return children;
};

export default nonProtected;
