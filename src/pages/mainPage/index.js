import React, { useState } from 'react';
import Card from '../../components/card';
import data from '../../components/assets/data';
import './mainpage.css'

const MainPage = () => {
    const [informations,setInformation]=useState(data)
    return (
      <div className='inclusive'>
    <div className='card-container'>
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
    </div>
    
  )
}

export default MainPage
