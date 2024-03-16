import React from 'react';
import JarImage from './jar';
import CardInfo from './cardInfo';
import Stats from './stats';

export default function LeftSide(){
    return(
        <div className='card-header card-input bg-leftSideBg w-1/2 p-12 flex flex-col items-center'>
             <img src="https://send.monobank.ua/img/logo_short.png" className="mb-20" alt="monobank logo"></img>
             <JarImage/>
             <CardInfo/>
             <Stats/>
        </div>
    )
}