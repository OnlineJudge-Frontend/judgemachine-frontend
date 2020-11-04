import React from 'react';

/*
import styled from 'styled-components';

const SwitchButton = styled.div`
    .switchbtn{
        position: fixed;
        padding-top: 10px;
        left: 10%;
    }  
`;
*/

const Switch = () => {
  return (   
    <div className="switchbtn">         
        <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches1'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitches1'>Easy</label>
        </div>

        <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches2'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitches2'>Normal</label>
        </div>

        <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitches3'
                defaultChecked
            />
            <label className='custom-control-label' htmlFor='customSwitches3'>Hard</label>
        </div>
    </div>   
    
  );
};

export default Switch;  