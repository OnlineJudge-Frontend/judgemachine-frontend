import React, { Component } from 'react';
//import Button from '../components/common/Button';
//import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/Base/HeaderContainer';
import ClassroomProfBody from '../containers/Base/ClassroomProfBody';


class DashboardPage extends Component {
    render(){
        return(
            <div>
                <ClassroomProfBody/>
                <HeaderContainer/>
            </div>
        );
    }
}

export default DashboardPage;