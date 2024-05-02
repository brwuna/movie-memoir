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
        overflow-y: scroll;
        padding: 0 0 2.5rem 0;
    }
`

export const Content = styled.div`
    max-width: 85rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > span:first-child svg {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > span p {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.3rem;

        margin-top: 24px;

        > h1 {
            font-size: 36px;
            font-weight: 500;
        }
    }

    .user-post {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        gap: 0.8rem;
        font-size: 1.6rem;
        

        img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 1.4rem;
        }

        span {
            font-size: 16px;
        }
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 2.1rem;
        text-align: justify;
    }

`