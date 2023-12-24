import {
    NavigationContainer,
    NavigationWrapper,
    NavigationItem,
    StyledNavigationLink
} from "./styled";

const NavigationBar = () => (
    <NavigationContainer>
        <NavigationWrapper>
            <NavigationItem>
                <StyledNavigationLink to="/zadania">
                    Zadania
                </StyledNavigationLink>
            </NavigationItem>
            <NavigationItem>
                <StyledNavigationLink to="/author">
                    O autorze
                </StyledNavigationLink>
            </NavigationItem>
        </NavigationWrapper>
    </NavigationContainer>
);

export default NavigationBar;