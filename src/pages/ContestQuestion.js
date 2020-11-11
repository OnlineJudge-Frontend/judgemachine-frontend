import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';
import { Link } from 'react-router-dom';
import {  media } from '../lib/styles/styleUtil';
//import Switch from "../components/common/Switch";
import Card from '../components/common/ContestQuestionCard';

const SideMenu = styled.div`    
    margin-bottom: 3px;
    margin-top: 100px;
    margin-left: 90px;
    position: fixed;
   
    .switch-btn{
        margin-left: 5px;
        font: bold;
        width: 100%;
        height: 100%;
    }  
    hr{
        margin-top: 25px;        
        width: 255px;
        height: 1px;
        background-color: black;
    }
    .horizontal{
        font-weight: 750;
        font-size: 18px;
    }
  
`;

const QuestionBody = styled.div`
    width: 2000px;
    display: inline;
    flex-direction: row;
    align-items: center;

    margin-top: 100px;

    padding-right: 1rem;
    padding-left: 2rem;

    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}

    .Array{
        display : flex;
        margin-bottom:40px;
        margin-top:80px;
        margin-left: 200px;
    }

    .Card-array{
        margin: 100px 200px 40px 200px;
        display : inline-flex;
    }

`;

const ContestQuestion = ({children}) => {
    return (  
        <div>
            <HeaderContainer/>

            <SideMenu>
                
                <div className="horizontal">
                    <Link to={"/ContestScoreboard"} style={{ textDecoration: 'none', color: 'black' }}><p>Score board</p></Link>
                </div>
            </SideMenu> 

            <QuestionBody>
                <div className="Card-array" style={{  display:'flex', justifyContent:'space-evenly'}}>
                        <Link to={"/ContestSolve"} style={{ textDecoration:'none'}}><Card></Card></Link>
                        <Link to={"/ContestSolve"} style={{ textDecoration:'none'}}><Card></Card></Link>
                        
                </div>
                <div className="Card-array" style={{  display:'flex', justifyContent:'space-evenly'}}>
                        <Link to={"/ContestSolve"} style={{ textDecoration:'none'}}><Card></Card></Link>
                        <Link to={"/ContestSolve"} style={{ textDecoration:'none'}}><Card></Card></Link>
                        
                </div>
                {children}
            </QuestionBody>
        </div>
            
    );
};

export default ContestQuestion;
