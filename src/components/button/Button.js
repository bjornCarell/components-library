import React from 'react';
import {ButtonStyled} from './ButtonStyled';
import {Loader} from '../loader/Loader'

export const Button = ({
    secondary,
    large,
    inverse,
    loading,
    children,
    ...props
}) => (
    
    <ButtonStyled
        secondary={secondary}
        large={large}
        inverse={inverse}
        {...props}
    >
        {loading ? <Loader small white /> : children}
    </ButtonStyled>

)