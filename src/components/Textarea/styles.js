import styled from 'styled-components'

export const ContainerTextarea = styled.textarea`
    width: 100%;
    height: 150px;

    margin-bottom: 8px;
    padding: 16px;

    border: none;
    border-radius: 10px;
    resize: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`