import styled from 'styled-components'

export const ContainerNewNote = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        
    }

    > main::-webkit-scrollbar {
        width: 0.8rem;
    }

    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }

    /* .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    } */
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 38px auto;

    /* display: flex;
    flex-direction: column; */

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;

        margin-bottom: 36px;

        h1 {
            font-size: 40px;
            font-weight: 500;
        }

        a {
            display: flex;
            gap: 0.4rem;

            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.PINK};

            margin-bottom: 24px;
        }

        svg {
            font-size: 18px;
        }
    }

    .inputs {
        display: flex;
        flex-wrap: nowrap;
        gap: 2rem;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1.5rem;

        max-width: 100%;
    }

    > div {
        display: flex;
        gap: 40px;

        button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`