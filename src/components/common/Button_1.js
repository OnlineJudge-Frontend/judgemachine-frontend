import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border-radius: 60px;
    font-size: 1rem;
    border-color:white;
    border-width:2px;
    margin-right:10px;
    
    background: rgba(0, 0, 0, 0.1);
    color: white;
    outline: none;
    cursor: pointer;
    
    width: 150px;
    height: 40px;

    &:hover{
        ackground:${palette.blue[6]};
    }
    ${props =>
        props.fullWidth&&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${props=>
        props.cyan&&
        css`
            background: ${palette.cyan[5]};
            &:hover{
                background:${palette.cyan[4]};
            }
       `}
`;

    
    const Button = props => <StyledButton {...props} />; // Button이 받아오는 props를 모두 StyledButton에 전달

    export default Button;