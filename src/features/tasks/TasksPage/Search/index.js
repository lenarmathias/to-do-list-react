import { useLocation } from "react-router-dom";
import { SearchWrapper } from "./styled";
import Input from "../Input/styled"
import { useHistory } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <SearchWrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchWrapper>
    )
};

export default Search;