import React from 'react';

export default function JarImage(){
    return (
        <div className="relative text-center">
            <img className="w-[215px] h-[215px] mb-[20px]" src="https://send.monobank.ua/img/jar_bg.png" alt="jar background" />
            <img className="h-[203px] w-[155px] absolute left-[30px] top-[10px]" src="https://send.monobank.ua/img/jar/uah_50.png" alt="jar glass" />
            <div className="grid-container absolute w-[155px] h-[203px] top-[39px] left-[45px]">
                <img className="w-[42px] h-[158px]" src="https://send.monobank.ua/img/jar/grid.png" alt="grid" />
                <div className="jar-label jar-goal absolute bottom-[190px] left-[13px] font-[800] text-[10px] text-red">10&nbsp;000</div>
                <div className="jar-label jar-middle absolute bottom-[116px] left-[5px] font-[800] text-[10px] text-red">5&nbsp;000</div>
                <div className="jar-label jar-bottom absolute bottom-[43px] left-[6px] font-[800] text-[10px] text-red">0</div>
            </div>
        </div>

      );
}