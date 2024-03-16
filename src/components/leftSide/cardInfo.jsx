import React from 'react';

export default function CardInfo(){
    return(
        <div className='cardInfo'>
           <p className="jar_owner text-black text-[14px] font-[500] text-center mt- mx-[102.9px]">Катерина К. збирає</p>
            <p className="goal_of_jar text-[21px] font-[900] text-goalOfJar mx-14 ml-20">На корм котикам🐈</p>
            <div className="info mt-[8px] px-0">
            <p className="font-[500] text-[14px] leading-140 text-center">Вуличні котики також хочуть їсти.</p>
            <p className="font-[500] text-[14px]  leading-140 text-center">Їм, як і нам, потрібна допомога сьогодні.</p> 
            <p className="font-[500] text-[14px]  leading-140 text-center">Не будьмо байдужими, допомагаймо тим, хто не може попіклуватися про себе!</p>
            </div>
        </div>
    )
}