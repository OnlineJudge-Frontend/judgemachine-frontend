import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
//import Button from '../../components/common/Button_1';
//import { Link } from 'react-router-dom';

const Bgimg = styled.div`
    position:relative;
    .img{
        width: 100vw;
        height: 100vh;
    }
    .backgroundcover{
        background-color:#000000;
        opacity:0.7;
        width: 100vw;
        height: 100vh;
        position:absolute;
        top:0px;
        left:0px    
    }
    .button{    
      position:absolute; 
      left:0; right:0; margin-left:auto; margin-right:auto;
      top: 300px; bottom:0; margin-top:auto; margin-bottom:auto;
      width:1100px; height:40px; 
    }
`;


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows:false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true, //true
      autoplaySpeed:1500,
      pauseOnHover: false,
      fade: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <Bgimg>
                <img className="img" src={ require('../../image/bg1.png') } alt="bg"/>
                <div className="backgroundcover"></div>
              </Bgimg>
          </div>
          <div>
              <Bgimg>
                <img className="img" src={ require('../../image/bg2.png') } alt="bg"/>
                <div className="backgroundcover"></div>
              </Bgimg>
          </div>
          <div>
              <Bgimg>
                <img className="img" src={ require('../../image/bg3.png') } alt="bg"/>
                <div className="backgroundcover"></div>
              </Bgimg>
          </div>
        </Slider>
      </div>
    );
  }
}