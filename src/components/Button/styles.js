import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 56px;
    padding: 0 16px;
    margin-top:  16px;

    font-weight: 500;

    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;