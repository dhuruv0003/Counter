const countvalue=document.querySelector('#counter');
const increment=()=>{
    //get the string value from the UI and convert into integer
    let value=parseInt(countvalue.innerText);
    // update the value 
    value=value+1;
    // set the value onto ui
    countvalue.innerText=value;
};
const decrement=()=>{
    let value=parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
};