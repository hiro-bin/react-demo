import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";
  // const style = {
  //   backgroundColor : 'black',
  //   color: 'white',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: '20px'
  // }
  return (
    <div className='container'>
      <h1 className='test'>Hello,
        {
          name === '리액트' ? (<h1>YES</h1>) : (<h1>NO</h1>)
        }!!</h1>
      <p>반갑습니다.</p>
    </div>
  );
  // const port = undefined;
  // return (
  //   <div>
  //     {
  //       port || '3000'
  //     }
  //   </div>
  // )
}

// function App() {
//   return React.createElement('div', null, "Hello, 리액트!!", React.createElement("p", null, "반갑습니다."));
// }


export default App;
