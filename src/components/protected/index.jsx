import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/actions/auth";

const Protected = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // get user profile if we have token
        dispatch(getProfile(navigate, null, "/login"));
    }, [dispatch, navigate]);

    return children;
};

export default Protected;
