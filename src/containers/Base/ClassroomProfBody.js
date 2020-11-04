import React, { useState } from 'react';
import { Collapse} from 'reactstrap';
import styled from 'styled-components';
import ClassroomprofBox from '../../components/common/ClassroomprofBox';
import ButtonOrigin from '../../components/common/Button';

const Box = styled.div`
    margin-top:100px;

    .Array{
      display : flex;
      margin-bottom:70px;
      margin-top:130px;
      margin-left: 150px;
  }
`;

const Title = styled.div`
    display: flex;
    background-color:#f1f3f5;
    width:100%;
    height:50px;
    cursor: pointer;
    border-radius:10px;

    font-size: 20px;
    font-weight: bold;

    .state{
      font-size: 30px;
      position: absolute;
      left: 85%;
      margin:0px;
    }

    :hover{
      background-color:#e6e6e6;
      color:black;
    }
`;

const SubTItle = styled.div`
    padding: 10px 50px;

    :hover{
      color:white;
    }
`;

const Button = styled.div`
  margin: 10px 150px 10px 150px;
`;

const Card = styled.div`
    margin:10px 10px 30px 50px;
`;

const Example = (props) => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState('');
  const [collapse3, setCollapse3] = useState('');
  const [collapse4, setCollapse4] = useState('');
  const [status1, setStatus1] = useState('+');
  const [status2, setStatus2] = useState('+');
  const [status3, setStatus3] = useState('+');
  const [status4, setStatus4] = useState('+');
  const onEntered1 = () => setStatus1('-');
  const onExited1 = () => setStatus1('+');
  const onEntered2 = () => setStatus2('-');
  const onExited2 = () => setStatus2('+');
  const onEntered3 = () => setStatus3('-');
  const onExited3 = () => setStatus3('+');
  const onEntered4 = () => setStatus4('-');
  const onExited4 = () => setStatus4('+');
  const toggle1 = () => setCollapse1(!collapse1);
  const toggle2 = () => setCollapse2(!collapse2);
  const toggle3 = () => setCollapse3(!collapse3);
  const toggle4 = () => setCollapse4(!collapse4);

  return (
      <Box>
        <div className="Array">
          <ButtonOrigin>추가하기</ButtonOrigin>
        </div>  

        <Button color="primary" onClick={toggle1}>
          <Title>
            <SubTItle>1 학년</SubTItle>
            <p className="state">{status1}</p>
          </Title>
          <Collapse
            isOpen={collapse1}
            onEntered={onEntered1}
            onExited={onExited1}>
            <Card>
                <ClassroomprofBox></ClassroomprofBox>
                <ClassroomprofBox></ClassroomprofBox>
            </Card>
          </Collapse>
        </Button>

        <Button color="primary" onClick={toggle2}>
          <Title>
            <SubTItle>2 학년</SubTItle>
            <p className="state">{status2}</p>
          </Title>
          <Collapse
            isOpen={collapse2}
            onEntered={onEntered2}
            onExited={onExited2}>
            <Card>
                <ClassroomprofBox></ClassroomprofBox>
            </Card>
          </Collapse>
        </Button>

        <Button color="primary" onClick={toggle3}>
          <Title>
            <SubTItle>3 학년</SubTItle>
            <p className="state">{status3}</p>
          </Title>
          <Collapse
            isOpen={collapse3}
            onEntered={onEntered3}
            onExited={onExited3}>
            <Card>
                <ClassroomprofBox></ClassroomprofBox>
            </Card>
          </Collapse>
        </Button>

        <Button color="primary" onClick={toggle4}>
          <Title>
            <SubTItle>4 학년</SubTItle>
            <p className="state">{status4}</p>
          </Title>
          <Collapse
            isOpen={collapse4}
            onEntered={onEntered4}
            onExited={onExited4}>
            <Card>
                <ClassroomprofBox></ClassroomprofBox>
            </Card>
          </Collapse>
        </Button>

      </Box>
      
  );
}

export default Example;