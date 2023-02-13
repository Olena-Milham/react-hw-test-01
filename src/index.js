
import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// const element = React.createElement('div',{a:5, b:8, children:['hello', '', 'world']}, )
// console.log(element);

// // ReactDOM.render(element, document.querrySelector('#root'))

// const elem1 = <span>hello</span>
// const elem2 = <span>world </span>
// const jsxElement= (<div>
//   {elem1}
//   {elem2}
// </div>)
  

// console.log(jsxElement);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
