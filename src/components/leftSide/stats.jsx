import React from 'react';

export default function Stats(){
    return(
        <div className="w-80 flex bg-white rounded-[16px] mx-auto text-left justify-center mt-[16px]">
            <div className="flex gap-[15px] px-5 py-1 my-1 border-r-[0.5px] border-solid border-r-drawer">
            <img src="https://send.monobank.ua/img/collected.svg" className="icon" />
            <div className="stats-data-text-container">
            <div className="stats_data_label font-[14px] text-statsLabel">Накопичено</div>
            <div className="stats_data_value font-[500] text-black text-[18px]">0.00&nbsp;₴</div>
            </div>
        </div>
        <div className="flex gap-[15px] px-5 py-1 my-1">
            <img src="https://send.monobank.ua/img/target.svg" className="icon" />
            <div className="stats-data-text-container">
            <div className="stats_goal_label font-[14px] text-statsLabel">Ціль</div>
            <div className="stats_goal_value font-[500] text-black text-[18px]">10&nbsp;000&nbsp;₴</div>
            </div>
        </div>
        </div>

    )

}