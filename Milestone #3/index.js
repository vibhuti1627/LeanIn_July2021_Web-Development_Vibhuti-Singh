import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let curDate = new Date(2021,17,8,21);
curDate = curDate.getHours();

let greeting=' ';
const cssStyle={
 };

if(curDate >= 1 && curDate < 12){
greeting='Good morning';
cssStyle.color ='Green';
}else if(curDate>=12 && curDate < 16)
{
  greeting='Good  Afternoon';
  cssStyle.color ='Orange';
}else if(curDate>=13 && curDate<20){
  greeting='Good  Evening';
  cssStyle.color ='Blue';
}
else{
  greeting='Good Night';
  cssStyle.color ='Black';
}

ReactDOM.render(
  <> 
  <h1>
    Hello sir,<span style={cssStyle}>{greeting}</span>
    </h1>
  </>,
  document.getElementById('root')
  );



// ReactDOM.render(
//   <> 
//     <h1> Hello sir!</h1>
//     <p>How you doing</p>
//   </>,
//   document.getElementById("root")
//   );
