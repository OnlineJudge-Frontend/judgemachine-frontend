import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/solarized.css';

const code = 'const a=0;';


const Content = styled.div`
    margin-top: 100px;
    hr{
        width: 100%;
    }

    .download-question{
        float: left;
        width: 40%;
        padding:10px;
        border-right: 1px solid grey;
        height: 750px;
    }

    .editor{
        float: right;
        width: 60%;
        padding:10px;
    }

    .editor form button{
        margin-top: 30px;
        padding: 10px;      
        width: 80px;
        height: 40px;
        background-color: #1062E5;
        color: white;
        border: none;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 8px;
    }
`;

class ContestSolve extends Component {
    render(){
        return(
            <div>                
                <HeaderContainer/>   
                
                <Content>
                    <p>문제 제출 페이지</p> 
                    <hr/>
                    <div className="contest-solve download-question">
                        문제 다운로드하는 버튼 생성해야 함.
                        <br/>
                        pdf 미리보기 가능..?
                    </div>

                    <div className="contest-solve editor">
                        <form action="" method="POST">
                            <CodeMirror
                                value={code}
                                options={{
                                theme: 'solarized',
                                tabSize: 2,
                                keyMap: 'sublime',
                                mode: 'jsx',
                                }}
                            /> 
                            <button type="submit">제출</button>
                        </form>
                    </div>
                    
                                       
                </Content>
                
                                
            </div>
        );
    }
}

export default ContestSolve;