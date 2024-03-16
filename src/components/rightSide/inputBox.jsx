import React, { useState } from 'react';

export default function InputBox() {
  const {0:currentAmount, 1:setCurrentAmount} = useState(0);
  

  function increaseAmount(amount) {
    return function() {
      const newAmount = currentAmount + amount;
      setCurrentAmount(newAmount);
    }
  }
  

  return (
    <div className='card_input'>
      <div className="flex bg-gradient-to-r from-borderBlue to-borderPink rounded-[24px] mb-[30px] w-[400px] h-[228px] p-[2px]">
        <div className="relative w-[396px] p-[24px] border-[3px] border-transparent bg-white rounded-[23px]">
          <div className="flex items-center justify-center">
            <div className="text-center font-[600] text-[15px]">
              Сума поповнення
            </div>
            <img src="https://send.monobank.ua/img/money.png" className="w-[16px] ml-1 mb-[-3px]" alt="money icon" />
          </div>
          <div className="money-input-block">
            <div className="flex items-center justify-center font-[700] text-[52px] text-center transition-opacity duration-200 py-[10px]">
                <div className='money-input-contenteditable' contentEditable="true" inputMode="decimal">
                {currentAmount}
                </div>
                <div className={'flex items-center'}>
                &nbsp;₴
                </div>
            </div>
            </div>
            {/* <div className='font-normal text-xs leading-none text-center opacity-50'>
            Сума повинна бути від 10&nbsp;₴ до 29&nbsp;999&nbsp;₴
            </div> */}
           
            <div className="flex justify-between max-w-[346px] mx-auto w-full my-4">
                <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] mr-2  hover:bg-hover" onClick={increaseAmount(100)}>
                    <div className="font-[500] text-[18px]">+100&nbsp;₴</div>
                </div>
                <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] mr-2  hover:bg-hover" onClick={increaseAmount(500)}>
                    <div className="font-[500] text-[18px]">+500&nbsp;₴</div>
                </div>
                <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] hover:bg-hover" onClick={increaseAmount(1000)}>
                    <div className="font-[500] text-[18px]">+1&nbsp;000&nbsp;₴</div>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}
