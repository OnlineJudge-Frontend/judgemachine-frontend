import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';

const Content = styled.div`
    margin-top: 100px;
`;

class Scoreboard extends Component {
    render(){
        return(
            <div>                
                <HeaderContainer/>   

                <Content>
                    <p>스코어보드 페이지</p> 
                </Content>
                                
            </div>
        );
    }
}

export default Scoreboard;