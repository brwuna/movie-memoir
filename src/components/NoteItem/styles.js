import styled from 'styled-components'

export const ContainerNoteItem = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 10px;

    padding-right: 16px;
    margin-bottom: 8px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        text-align: left;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`