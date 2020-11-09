import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/Base/HeaderContainer';
import { Link } from 'react-router-dom';

const ContestCard = styled.div `
    margin-top: 100px;
`;

class ContestIndex extends Component {
    render(){
        return(
            <div>   
                <HeaderContainer/>

                <div className="contest-card">
                    <ContestCard>
                    <ul>
                    <Link to='/ContestQuestion'><li>Contest1</li></Link>
                    </ul>
                    </ContestCard>
                    
                </div>             
                

                
                
               
            </div>
        );
    }
}

export default ContestIndex;
