import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';

const Content = styled.div`
    margin-top: 100px;
    hr{
        width: 100%;
    }
`;

class ContestSolve extends Component {
    render(){
        return(
            <div>                
                <HeaderContainer/>   

                <Content>
                    <p>문제 제출 페이지</p> 
                    <hr/>
                    
                </Content>
                                
            </div>
        );
    }
}

export default ContestSolve;