import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ center }) => {

  
//center the div
  const display = center ? { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } : { display: 'flex', justifyContent: 'center', alignItems: 'center' }
  return <div className='center' style={display}><ReactLoading type={'cylon'} color={'#2cb1bc'} height={'10%'} width={'10%'} /></div>
}

export default Loading
