import styled from 'styled-components'

export const ContainerNote = styled.button`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;

        text-align: justify;

        font-size: 24px;
        font-weight: 700;

        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
        font-weight: 400;
        line-height: 1.9rem;
        text-align: justify;

        max-height: 5rem;

        display: flex;
        align-items: center;

        margin-top: 1.5rem;

        color: ${({ theme }) => theme.COLORS.GRAY_100};

        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > footer {
        width: 100%;

        display: flex;
        margin-top: 24px;
    }
`