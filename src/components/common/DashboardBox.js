import React, { Component } from 'react';
//import Button from '../components/common/Button';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Box = styled.div`
    width: 450px;
    height: 50px;
    background: #f9f9f9 0% 0% no-repeat padding-box;
    opacity: 1;
    border-top:1px solid #adb5bd;
    border-bottom:1px solid #adb5bd;
    margin-bottom:2px;
    border-radius:5px;
    padding 2.5px 20px;
`;

const Content = styled.div`
    width: 400px;
    height: 45px;
    .Subject{
        font-weight:bold;
        font-size:15px;
    }
    .Professor{
        font-size:13px;
        margin-left:20px;
    }
`;



class DashboardPage extends Component {
    render(){
        return(
            <div>
                <Box>
                    <Content>
                        <div className="Subject">확률과 통계</div>
                        <div className="Professor">교수님 성함</div>
                    </Content>
                </Box>
            </div>
        );
    }
}

export default DashboardPage;