import React from 'react' // Step 1
import ReactDOM from 'react-dom' // Step 2
import { BrowserRouter } from 'react-router-dom'
import App from './App.js' // Step 3
// import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<App />
  </BrowserRouter>
);

// // ReactDOM.render(<Router><App/></Router>,document.getElementById('root')) // Step 4
// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
// document.getElementById('root')) // Step 4