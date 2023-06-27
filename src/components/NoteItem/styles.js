import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme,isNew }) => isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE_100};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    height: ${({ isNew }) => isNew ? "54px" : "56px"};
    
    border-radius: 10px;
    padding-right: 16px;
    
    > button {
        border: none;
        background: none;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK_100};
            width: 22px;
            height: 24px;
        }
    }
    > input {
        height: 56px;
        width: 100%;
        font-weight: 400;
        padding: 16px;
        color: ${({ theme}) => theme.COLORS.WHITE_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme}) => theme.COLORS.GRAY_200};
        }
    }
`