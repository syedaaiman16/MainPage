import React from 'react';
import CustomCard from './CardItem'; // Import the CustomCard component
import data from './data/carddata.json'; // Import your JSON data

function YourMainComponent() {
  return (
    <div>
      {data.map((item, index) => (
        <CustomCard key={index} title={item.title} body={item.body}/>
      ))}
    </div>
  );
}

export default YourMainComponent;
