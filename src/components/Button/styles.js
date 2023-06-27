import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    height: 48px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        margin-right: 8px;
    }

    &:disabled {
        opacity: 0.5;
    }

`