import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (parameterName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(parameterName);
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined || value === "") {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};