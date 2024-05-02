import { HeaderContainer, Brand, Profile, Search, Logout } from "./styles"
import { ImExit } from "react-icons/im";

export function Header({ children }) {
    return(
        <HeaderContainer>
            <Brand>
                <h1>Movie Memoir</h1>
            </Brand>

            <Search>
                {children}
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Bruna Nascimento</strong>
                    <Logout>
                        <ImExit />
                        Sair
                    </Logout>
                </div>
                    <img src="https://github.com/brwuna.png"/>
            </Profile>

        </HeaderContainer>
    )
}