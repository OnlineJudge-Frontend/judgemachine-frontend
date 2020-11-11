import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import CarouselPage from './pages/CarouselPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClassroomPage from './pages/ClassroomPage';
import Homework from './pages/Classroom-Index/Homework';
import Grade from './pages/Classroom-Index/Grade';
import Exam from './pages/Classroom-Index/Exam';
import ExamTest from './pages/ExamTest';
import Homeworkcontent from './pages/Homeworkcontent';
import HomeworkCheck from './pages/HomeworkCheck';
import HomeworkSubmit from './pages/HomeworkSubmit';
import ExamCheck from './pages/ExamCheck';
import DashboardPage from './pages/DashboardPage';
import ContestQuestion from './pages/ContestQuestion';
import ContestIndex from './pages/ContestIndex';
import ContestSolve from './pages/ContestSolve';
import ContestScoreboard from './pages/ContestScoreboard'
import Hi from './pages/test/Hi';
import ClassroomProfPage from './pages/ClassroomProfPage';

import axios from 'axios';

const App = () => {

  /*
  useEffect(() => {
    const apiCall = async () => {

      const response = await axios.get(url);
      console.log(response.data);
    };
    apiCall();
  }, [])*/

  return (
    <>
      <Route component={Hi} path="/"exact />
      {/* <Route component={CarouselPage} path={['/@:username', '/']}exact /> */}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ClassroomPage} path="/classroom" />
      <Route component={ExamTest} path="/examTest" />
      <Route component={ExamCheck} path="/examCheck" />
      <Route component={Homework} path="/classroom-Index/homework" />
      <Route component={Grade} path="/classroom-Index/grade" />
      <Route component={Exam} path="/classroom-Index/exam" />
      <Route component={Homeworkcontent} path="/homeworkcontent" />
      <Route component={HomeworkCheck} path="/homeworkCheck" />
      <Route component={HomeworkSubmit} path="/HomeworkSubmit" />
      <Route component={DashboardPage} path="/DashboardPage" />
      <Route component={ContestQuestion} path="/ContestQuestion" />
      <Route component={ContestIndex} path="/ContestIndex" />
      <Route component={ContestSolve} path="/ContestSolve" />
      <Route component={ContestScoreboard} path="/ContestScoreboard" />
      <Route component={ClassroomProfPage} path="/ClassroomProfPage" />
    </>
  );
};

export default App;

