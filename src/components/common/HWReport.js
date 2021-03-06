import React, { Component } from 'react';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';

// 흰 배경, 내용 중간 정렬

const CardBody = styled.div`
    .cardcircle{
        margin: 20px 0 20px 40px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #ABAAD8;
    }

    .Circletext{
        margin-top: 12px;
        margin-left: 7px;
        width: 43px;
        height: 33px;
    }

    .Cardheadertext{
        font-size:13px;
        margin-bottom: 5px;
    }
    .Cardborder{
        width: 520px;
        height: 100px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 5px;
        box-shadow: 0px 2px 4px #00000054;
        border: 1px solid #ffffff;
        opacity: 1;
        display:flex;

    }
    .Cardheader{
        margin-top: 10px;
        margin-left: 70px;
        color: black;
        fontWeight: bold;
        fontSize:20px;
        font-size:x-large;
        font-weight: bold;
    }
    .Cardbody{
        display:flex;
        margin-top:10px;
        margin-left: 70px;
    }
    .Cardtext{
        margin-bottom:5px;
        color:black;
    }
    outline: none;
    cursor: pointer;
    

`;



class HWCode extends Component {
  render() {
    return (
        <CardBody>
            <div className="Cardborder" >
                <div className="cardcircle">
                <img className="Circletext" src={ require('../../image/report.png') } alt="HWReport "/></div>
                <div style={{display:'inline'}}>
                    <div className="Cardheader">HOMEWORK</div>
                    <div className="Cardbody">
                        <p className="Cardtext"  style={{paddingRight:'100px'}}>CODE</p>
                        <p className="Cardtext">2020-01-12</p>
                    </div>
                </div>
            </div>
        </CardBody>

    );
  }
}

export default HWCode