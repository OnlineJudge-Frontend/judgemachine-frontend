import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';
import Switch from "../components/common/Switch";


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


class ContestIndex extends Component {
    render(){
        return(
            <div>                
                <HeaderContainer/>

                <SideMenu>
                    <div className="switch-btn">
                        <p>난이도</p>                   
                        <Switch />                        
                    </div> 
                    <div className="horizontal">
                        <hr/>
                        <p>Score board</p>
                    </div>
                </SideMenu>

                
                                       
            </div>
        );
    }
}

export default ContestIndex;
