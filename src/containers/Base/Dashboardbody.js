import React, { Component } from 'react';
//import Button from '../components/common/Button';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DashboardBox from '../../components/common/DashboardBox'
import HomeworkBox from '../../components/common/HomeworkBox'


const Sidebox = styled.div`
    margin-left:250px;
    margin-right:250px;
    height:100vh;
    weight:100vw;
`;

const SBTOP = styled.div`
    display:flex;
    margin-top:100px;
`;

const SBBottom = styled.div`
    display:flex;
    margin-top:50px;
    margin-bottom:400px;
`;

const Classroom = styled.div`
    width: 450px;
    height: 350px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
    opacity: 1;
    text-decoration:none;

    .header{
        padding: 20px;
        text-align: center;
        font: normal normal normal 20px/12px Segoe UI;
        letter-spacing: 3px;
        color: #4D4F5C;
    }
`;

const CRbody = styled.div`
    width: 450px;
    height: 250px;
    overflow: auto;
    background: #f2f2f2 0% 00% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
`;

const Homework = styled.div`
    width: 450px;
    height: 350px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
    opacity: 1;
    text-decoration:none;
    position: absolute;
    left: 800px;

    .header{
        padding: 20px;
        text-align: center;
        font: normal normal normal 20px/12px Segoe UI;
        letter-spacing: 3px;
        color: #4D4F5C;
    }
`;

const Notice = styled.div`
    width: 450px;
    height: 350px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
    opacity: 1;
    text-decoration:none;
    position: absolute;

    .header{
        padding: 20px;
        text-align: center;
        font: normal normal normal 20px/12px Segoe UI;
        letter-spacing: 3px;
        color: #4D4F5C;
    }
`;


class DashboardPage extends Component {
    render(){
        return(
            <div>
                <Sidebox>
                    <SBTOP>
                        <Classroom>
                            <div className="header">
                                CLASSROOM
                            </div>
                            <CRbody>
                                <DashboardBox/><DashboardBox/><DashboardBox/><DashboardBox/><DashboardBox/><DashboardBox/><DashboardBox/>
                            </CRbody>
                        </Classroom>
                        <Homework>
                            <div className="header">
                                HOMEWORK
                            </div>
                            <CRbody>
                                <HomeworkBox/>
                            </CRbody>
                        </Homework>
                    </SBTOP>
                    <SBBottom>
                        <Notice>
                            <div className="header">
                                공지사항
                            </div>
                            <CRbody>
                            </CRbody>
                        </Notice>

                    </SBBottom>
                </Sidebox>
            </div>
        );
    }
}

export default DashboardPage;