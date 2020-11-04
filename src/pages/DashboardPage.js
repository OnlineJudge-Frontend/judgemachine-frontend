import React, { Component } from 'react';
//import Button from '../components/common/Button';
//import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/Base/HeaderContainer';
import Dashboardbody from '../containers/Base/Dashboardbody';




class DashboardPage extends Component {
    render(){
        return(
            <div>
                <Dashboardbody/>
                <HeaderContainer/>
            </div>
        );
    }
}

export default DashboardPage;