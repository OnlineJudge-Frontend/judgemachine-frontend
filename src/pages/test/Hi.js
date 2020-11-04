import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import BackgroundPass from '../../containers/Base/BackgroundPass';
import Button from '../../components/common/Button_1';
import { Link } from 'react-router-dom';


const Center = styled.div`
    position:absolute; 
    left:0; right:0; margin-left:auto; margin-right:auto;
    top: 0; bottom:0; margin-top: 18%; margin-bottom:auto;
    width:1100px; height:40px;
    text-align: center; 
    .Logo{
      letter-spacing: 2px;
      color: #DEE0E1;
      font-size: 3rem;
      font-weight: 700;
      border-bottom: 3px solid #ffffff;
      display: inline-block;
      padding-bottom: 10px;
      font-family: sans-serif;
      padding-right:40px; padding-left:40px;
    }
    .Semi-Logo{
    padding-top:20px;
      font: lighter 18px/30px NanumSquare_ac;
      letter-spacing: 2.5px;
      color: #DEE0E1;
    }
    .button{
        padding-top:50px;
    }
    .bold{
        font-weight:bold;
    }

`;

export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
         <BackgroundPass>
         </BackgroundPass>
         <Center>
             <h3 className="Logo">CBNU Online Judge</h3>
            <h5 className="Semi-Logo">과제와 콘테스트의 제출과 채점을 위한 충북대학교의 온라인 저지 시스템입니다.</h5>
            <div className="button">
            <Link to="/login"><Button>LOGIN</Button></Link>  
            <Button>SIGN UP</Button>   
            <Link to="/DashboardPage"><Button>DASHBOARD </Button></Link>
            </div>
        </Center>
      </div>
    );
  }
}