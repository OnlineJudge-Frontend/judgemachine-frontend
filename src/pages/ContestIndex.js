import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';

const TEST = styled.div`
    .Text{
        margin-bottom: 3px;
        margin-top: 100px;
        margin-left: 93px;
        width: 100%;
        height: 38px;
        text-align: left;
        font: normal 600 25px/38px Segoe UI;
        color: #000000;
        opacity: 1;
    }
`;

class ContestIndex extends Component {
    render(){
        return(
            <div>
                <TEST><p className="Text">콘테스트 인덱스 페이지</p></TEST>
                <HeaderContainer/>

            </div>
        );
    }
}

export default ContestIndex;
