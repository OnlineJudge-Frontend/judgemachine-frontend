import React, { Component } from 'react';
//import Button from '../components/common/Button';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Box = styled.div`
    width: 450px;
    height: 54px;
    background: #f9f9f9 0% 0% no-repeat padding-box;
    opacity: 1;
    border-top:1px solid #adb5bd;
    border-bottom:1px solid #adb5bd;
    margin-bottom:2px;
    border-radius:5px;
    padding: 3px 20px;
`;

const Content = styled.div`
    width: 400px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content:left;
    .Subject{
        border-right:2px solid grey;
        padding-right:8px;
        font-weight:bold;
        font-size:15px;
    }
    .Title{
        padding-left:8px;
        font-size:17px;
        color:gray;
    }
`;



class DashboardPage extends Component {
    render(){
        return(
            <div>
                <Box>
                    <Content>
                        <div className="Subject">확률과 통계  </div>
                        <div className="Title">과제에 대한 내용</div>
                    </Content>
                </Box>
            </div>
        );
    }
}

export default DashboardPage;