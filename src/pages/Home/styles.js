import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;

        width: 100%;
        max-width: 113.7rem;
        padding: 0 12.3rem;
        margin: 0 auto;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 3.8rem;

            h1 {
                font-weight: 400;
            }
        }
    }
`;

export const Content = styled.div`
    max-height: calc(100vh - 15rem);
    grid-area: content;
    overflow-y: auto;
`;

export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    padding: 1.2rem 3.2rem;
    border-radius: .8rem;

    > svg {
        font-size: 20px;
    }
`;
