import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
    background-color: ${props => (props.secondary 
        ? ({theme}) => theme.color.secondary 
        : ({theme}) => theme.color.primaryLight
    )}; 
    border: 1px solid transparent;
    border-radius: ${props => (props.round
        ? ({theme}) => theme.animation.radiusL
        : ({theme}) => theme.animation.radiusM
    )};
    color: ${({theme}) => theme.color.white};
    cursor: pointer;
    font-size: ${props => {
        if(props.large) return ({theme}) => theme.fontSize.large;
        if(props.small) return ({theme}) => theme.fontSize.small;
    }};
    padding: ${({theme}) => theme.spacing.small} ${({theme}) => theme.spacing.medium};

    &:hover{
        background-color: ${props => (props.secondary 
            ? ({theme}) => theme.color.secondaryDark 
            : ({theme}) => theme.color.primary
        )}; 
        box-shadow: ${props => (props.hoverShadow
            ? ({theme}) => theme.animation.boxShadowAround
            : 'none'
        )};
    }

    ${props => {
        return (
            props.inverse &&
            css`
                background-color: ${({theme}) => theme.color.white};
                border: 1px solid;
                color: ${props => (props.secondary 
                    ? ({theme}) => theme.color.secondary 
                    : ({theme}) => theme.color.primaryLight
                )};
                &:hover{
                border: 1px solid transparent;
                background-color: ${props => (props.secondary 
                    ? ({theme}) => theme.color.secondary 
                    : ({theme}) => theme.color.primary
                )};
                color: ${({theme}) => theme.color.white};
              }      
            `
         )
    }}
`