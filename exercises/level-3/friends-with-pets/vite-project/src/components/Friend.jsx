import React from "react";
import Pet from './Pet'

export default function Friend(props){
    const{name,age,pets} = props
    return(
        <>
    
        <h4 className="human">{name}</h4>
        <h5 className="human">{age}</h5>
    
        {pets.map(item => { // Iterate over each pet in the item.pets array
  return ( // Return JSX for rendering
    <span> {/* Container for each pet */}
      <Pet // Render the Pet component
        name={item.name} // Pass the name of the current pet as a prop
        breed={item.breed} // Pass the breed of the current pet as a prop
      />
    </span>
  );
})}

        </>
    )
}