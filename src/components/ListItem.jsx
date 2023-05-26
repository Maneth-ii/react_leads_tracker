// import React from 'react'

// function ListItem({ items , deleteItem }) {
//     const itemsf = items.map((each , index) => {return (<li key={index} className='list-item'><a className='link' href='{each}'>{each}</a><button className='delete-btn' onClick={deleteItem}>X</button></li>) } )
//     return(
//     (itemsf)
//     )

// }

// export default ListItem;
// import React from 'react'

// function ListItem({ items, deleteItem }) {
//     const itemsf = items.map((each, index) => (
//       <li key={index} className="list-item">
//         <a className="link" href={each}>
//           {each}
//         </a>
//         <button
//           className="delete-btn"
//           onClick={() => deleteItem(index)} // Pass the index to the deleteItem function
//         >
//           X
//         </button>
//       </li>
//     ));
//     return <>{itemsf}</>;
//   }
  

//   export default ListItem;

  import React from 'react';

function ListItem({ items, deleteItem }) {
  const itemsList = items.map((each, index) => (
    <li key={index} className="list-item">
      <a className="link" href={each}>
        {each}
      </a>
      <button
        className="delete-btn"
        onClick={() => deleteItem(index)} // Call deleteItem function with the index
      >
        X
      </button>
    </li>
  ));

  return <>{itemsList}</>;
}

export default ListItem;
