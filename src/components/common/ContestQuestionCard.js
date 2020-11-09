import React, { Component } from 'react';
import styled from 'styled-components';


const QuestionCardBody = styled.div`
    .Cardborder{
        width: 350px;
        height: 200px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: none;
        opacity: 1;
        text-decoration:none;
    }

    .Cardborder:hover{
        box-shadow: 0px 2px 10px #00000054;
    }    

    .Cardtext{
        margin-top: 5px;
        margin-bottom:5px;
        color:gray;
        text-decoration:none;
        font-size:16px;
    }
    
    outline: none;
    cursor: pointer;

    hr{      
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 0;
    }

    h3{
        margin-left: 5px;
        margin-top: 20px;
    }
`;



class QuestionCard extends Component {
  render() {
    return (
        <QuestionCardBody>
            <div className="Cardborder" >                
                <div className="Cardbody">
                    <h3>Question1</h3>
                    <hr/>
                    <p className="Cardtext">문제1</p>                    
                </div>
            </div>
        </QuestionCardBody>

    );
  }
}

export default QuestionCard;