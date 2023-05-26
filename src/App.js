// import React, { useState } from 'react'
// import UserInput from "./components/UserInput";
// import Btns from './components/Btns';
// import Display from './components/Display';


// function App() {

  
//   const [inputArray , setInputArray] = useState([
//     'https:youtube.lk'
//   ])

//   const [stringInput , setStringInput] = useState('')


//   const updateList = () => {
//     const [updatedList  , setUpdatedList] = useState([])
//     const deleteItem = (index) => {
//       // Create a copy of the inputArray
//       const updatedList = [...inputArray];
//       // Remove the item at the specified index
//       updatedList.splice(index, 1);
//       // Update the inputArray state with the updated list
//       setInputArray(updatedList);
//     };

//     return updateList
  
    

//   }


//   const onInputChange = (e) =>{
//     setStringInput(e.target.value)
//   }

//   const onBtnClick = () =>{
//     if(stringInput){
//       setInputArray((inputArray) => {return([...inputArray , stringInput])})
//       setStringInput('')
//     }else{
//       alert("Shouldn't Empty! ")
//     }
    
//   }
//   return (
//     <React.Fragment>
//         <div className='main-container'>
//             <UserInput onInputChange={onInputChange} value ={stringInput} />
//             <Btns onBtnClick ={onBtnClick}/>
//             <Display list={inputArray} updatedList = {updateList}/>

//         </div>


//     </React.Fragment>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react';
import UserInput from "./components/UserInput";
import Btns from './components/Btns';
import Display from './components/Display';

function App() {
  // The given application is a simple React-based web app that allows users to add and delete items from a list. Users can input URLs or any other text, which will be added to the list dynamically. Each item in the list is displayed as a clickable link, and users can delete individual items by clicking on the "X" button next to each item. It provides a straightforward user interface for managing and interacting with a dynamic list of items.


  const [inputArray, setInputArray] = useState([]);
  const [stringInput, setStringInput] = useState('');

 

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setInputArray(JSON.parse(storedItems));
    }
  }, []);


  const deleteItem = (index) => {
    const updatedList = [...inputArray];
    updatedList.splice(index, 1);
    setInputArray(updatedList);
  };

  const onInputChange = (e) => {
    setStringInput(e.target.value);
  };

  const onBtnClick = () => {
    if (stringInput) {
      setInputArray((inputArray) => [...inputArray, stringInput]);
      setStringInput('');
    } else {
      alert("Shouldn't be empty!");
    }
   
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(inputArray));
  }, [inputArray]);
  

 
  return (
    <React.Fragment>
      <div className='main-container'>
        <UserInput onInputChange={onInputChange} value={stringInput} />
        <Btns onBtnClick={onBtnClick} />
        <Display list={inputArray} deleteItem={deleteItem} />
      </div>
    </React.Fragment>
  );
}

export default App;
