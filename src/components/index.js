import React, { useState } from 'react';
import data from './assets/data';
import Card from './card';

const MainPage = () => {
    const [informations,setInformation]=useState(data)
    return (
    <div>
    {
        informations.map((i)=>
        <Card 
        name={i.name}
        img={i.img}
        job={i.job}
        about={i.about}
        id={i.id}
        />
        )
    }
    </div>
    
  )
}

export default MainPage
