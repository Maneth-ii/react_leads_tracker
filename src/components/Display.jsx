// import React from 'react'
// import ListItem from './ListItem'


// function Display({list}) {


//     function deleteItem(){
//         console.log('clicked')
//     }
//     return (
//         <div className='display'>
//         <ul>
//             <ListItem items={list} deleteItem ={deleteItem} />
//         </ul>

//         </div>
//     )

// }


// export default Display;

// import React from 'react'
// import ListItem from './ListItem'

// function Display({updatedList}) {

    
//     return (
//       <div className="display">
//         <ul>
//           <ListItem items={updatedList} deleteItem={deleteItem} />
//         </ul>
//       </div>
//     );
//   }

// export default Display;
  
import React from 'react';
import ListItem from './ListItem';

function Display({ list, deleteItem }) {
  return (
    <div className="display">
      <ul>
        <ListItem items={list} deleteItem={deleteItem} />
      </ul>
    </div>
  );
}

export default Display;
