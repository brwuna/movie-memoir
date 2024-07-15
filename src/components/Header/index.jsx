import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { HeaderContainer, Brand, Profile, Search, Logout } from "./styles"
import { ImExit } from "react-icons/im";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";
export function Header({ children }) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/")
        signOut();
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
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
                    <strong>{user.name}</strong>   
                </div>
                <img src={avatarURL} alt={user.name} /> 
            </Profile>

            <Logout onClick={handleSignOut}>
                <ImExit />
            </Logout>

        </HeaderContainer>
    )
}