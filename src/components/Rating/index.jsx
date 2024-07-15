import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./styles";

export function Rating({ grade, isBigSize}) {
    let stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < grade) {
            stars.push(<AiFillStar key={i} />)
        } else {
            stars.push(<AiOutlineStar key={i} />)
        }
    }
    return <Container isBigSize={isBigSize}>{stars}</Container>
}