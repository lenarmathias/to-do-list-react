import Input from "../Input/styled"
import { useReplaceQueryParameter } from "../queryParameters";
import { SearchWrapper } from "./styled";

const Search = ({ query, searchQueryParamName }) => {
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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