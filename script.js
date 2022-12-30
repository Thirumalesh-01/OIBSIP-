

let string = "";
// the method query selector is used for theselection of all those tags whoch are with the name as button
let buttons = document.querySelectorAll('.button');
// thus on applying forEach loop , for those made array,
//-->>> we thus the add the even listener to get triggered when ever that particular button gets clicked
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    //--->> so, we thus, used the arrow function, which is regarded, as the latest, version, of usage of
    //-->>> functions, in the ES6 javascript feature...
    //-->>> thus, an event e , gets triggered, when ever, this button, gets clicked,
    if(e.target.innerHTML == '='){
      string = eval(string);//-->> the inbuilt button eval makesus to evalute the function '
      //-->> the main aim of the query, selector, is to select  any types, of the tags, classes and other id as well too!!
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;// -->> so, we thus , substitute the value which we got 
      //-->> finally in the text field itself
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})