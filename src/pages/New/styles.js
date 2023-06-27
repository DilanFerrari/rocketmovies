import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        max-width: 1137px;
        width: 100%;
        margin: 0 auto;
        margin-top: 40px;
    }
` 
export const ButtonBack = styled(Link)`

`

export const Form = styled.form`
    max-width: 1113px;

    > header {
        h2 {
            margin: 24px 0 40px;
            font-size: 36px;
        }
    }
    .body-form {
        display: flex;
        flex-direction: column;
        gap: 35px;
        .title-note {
            display: flex;
            gap: 40px;
        }
    }
` 

export const Section = styled.section`
    width: 100%;
    > h2 {
        font-size: 20px;
        font-weight: 400;

        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    .tags {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 8px;
        height: 88px;
        align-items: center;
        padding: 16px;
    }
`

export const ButtonsSection = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 85px;

    > button {
        font-weight: 500;
    }
    
    :nth-child(1) {
        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`