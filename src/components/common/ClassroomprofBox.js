import React, { Component } from 'react';
import styled from 'styled-components';
//import palette from '../../lib/styles/palette';

// 흰 배경, 내용 중간 정렬

const CardBody = styled.div`
    margin-bottom:10px;
    .Cardborder{
        width: 600px;
        height: 45px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 5px;
        box-shadow: 0px 2px 4px #00000054;
        border: 1px solid #ffffff;
        opacity: 1;
        display:flex;

    }
    .Cardheader{
        margin-left: 60px;
        color: black;
        font-Size:20px;
        font-weight: bold;

    }
    .Cardbody{
        display:flex;
        padding-left: 60px;
    }
    .Cardtext{
        font-Size:20px;
    }
    outline: none;
    cursor: pointer;
`;



class HWCode extends Component {
  render() {
    return (
        <CardBody>
            <div className="Cardborder" >
                <div style={{display:'flex' , padding: '7px 0'}}>
                    <div className="Cardheader">Subject명</div>
                    <div className="Cardbody">
                        <p className="Cardtext"  style={{paddingRight:'100px'}}>담당 학과</p>
                        <p className="Cardtext">과목 번호</p>
                    </div>
                </div>
            </div>
        </CardBody>

    );
  }
}

export default HWCode