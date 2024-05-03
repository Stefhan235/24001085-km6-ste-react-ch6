import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCar(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/");
    }
};

export const createCar =
    (
        navigate,
        brand,
        model,
        plate,
        image,
        type,
        transmission,
        year,
        capacity,
        rentPerDay,
        available,
        availableAt,
        setIsLoading
    ) =>
    async (dispatch, getState) => {
        const state = getState();
        const { token } = state.auth;

        setIsLoading(true);

        let data = new FormData();
        data.append("brand", brand);
        data.append("model", model);
        data.append("plate", plate);
        if (image) {
            data.append("image", image);
        }
        data.append("type", type);
        data.append("transmission", transmission);
        data.append("year", year);
        data.append("capacity", capacity);
        data.append("rentPerDay", rentPerDay);
        data.append("available", available);
        data.append("availableAt", availableAt);

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        try {
            const response = await axios.request(config);

            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/");
        }
        setIsLoading(false);
    };
