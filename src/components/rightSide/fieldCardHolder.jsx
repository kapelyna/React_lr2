import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputBox from './inputBox'

export default function FieldCardHolder(){
    const {0:currentAmount, 1:setCurrentAmount} = useState(0);
    
    function increaseAmount(amount) {
        let newAmount = currentAmount + amount;
        setCurrentAmount(newAmount);
    }
    
    function handlePaymentButtonClick(paymentMethod) {
        var addedAmount = parseFloat(document.querySelector('.money-input-contenteditable').innerText.replace(/\D/g, ''));
        // var existingAmount = parseFloat(localStorage.getItem('savedAmount')) || 0;
        // var totalAmount = existingAmount + currentAmount; // Обчислюємо загальну суму
        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;
    
        console.log("Спосіб оплати: " + paymentMethod);
        console.log("Сума: " + addedAmount);
        console.log("Ім'я: " + name);
        console.log("Коментар: " + comment);
    
        // Зберігаємо нову суму у localStorage
        //localStorage.setItem('savedAmount', totalAmount);
    
        // Оновлюємо загальну суму
        //updateTotalAmount();
    
        // Очищення полів введення
        document.querySelector('.money-input-contenteditable').innerText = '0';
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    }
    //relative max-w-[306px] w-full ml-auto mr-auto mb-[16px] border-[1px] border-solid border-drawer rounded-[16px] bg-transparent py-[16px] h-[56px]
    return (
        <div className='flex flex-col items-center'>
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
                                <div className='money-input-contenteditable outline-[0]' contentEditable="true" inputMode="decimal">
                                    {currentAmount}
                                </div>
                                <div className='flex items-center'>&nbsp;₴</div>
                            </div>
                        </div>
                        {/* {(currentAmount < 10 || currentAmount > 29999) ? (
                            <div className='font-normal text-xs leading-none text-center opacity-50'>
                                Сума повинна бути від 10&nbsp;₴ до 29&nbsp;999&nbsp;₴
                            </div>
                        ):(<div className='font-normal text-xs leading-none text-center opacity-50 hidden'>
                                Сума повинна бути від 10&nbsp;₴ до 29&nbsp;999&nbsp;₴
                            </div>)} */}
                        <div className="flex justify-between max-w-[346px] mx-auto w-full my-4">
                            <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] mr-2  hover:bg-hover" onClick={() => increaseAmount(100)}>
                                <div className="font-[500] text-[18px]">+100&nbsp;₴</div>
                            </div>
                            <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] mr-2  hover:bg-hover" onClick={() => increaseAmount(500)}>
                                <div className="font-[500] text-[18px]">+500&nbsp;₴</div>
                            </div>
                            <div tabIndex="0" className="chip-button bg-white border-[1px] border-drawer rounded-[16px] px-3 flex items-center justify-center cursor-pointer select-none min-h-[40px] w-[115px] hover:bg-hover" onClick={() => increaseAmount(1000)}>
                                <div className="font-[500] text-[18px]">+1&nbsp;000&nbsp;₴</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field card-holder ">
                <TextField id="name" label="Ваше ім'я (необов'язково)" variant="outlined" sx={{ m: 1, width: '340px', top: '-5px' }} />
                <span className="err"></span>
            </div>
            <div className="field payment-comment">
                <TextField id="comment" label="Коментар (необов'язково)" variant="outlined" sx={{ m: 1, width: '340px', top: '-5px' }} />
            </div>
            <div className="mono-pay shown flex justify-center cursor-pointer mb-[16px] h-[48px] mx-[10px] my-auto w-[340px] rounded-[8px] bg-black hover:bg-buttonHover" onClick={() => handlePaymentButtonClick('monoPay')}>
                <img src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay" className="h-[26px] m-auto" />
            </div>
            <div className="tap-to-pay shown flex justify-center h-[48px] mx-[10px] my-auto w-[340px] rounded-[8px] bg-black hover:bg-buttonHover" onClick={() => handlePaymentButtonClick('googlePay')}>
                <div className="gpay-button-fill h-full">
                    <button type="button" aria-label="Google Pay" className="bg-black text-white py-6 px-8 rounded-lg bg-center bg-no-repeat bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://www.gstatic.com/instantbuy/svg/dark_gpay.svg')" }}></button>
                </div>
            </div>
            <div id="manual-pan-trigger" className="flex flex-col justify-center">
                <div className="w-[340px] mx-[10px] mt-[20px] mb-[8px] border-t-[0.5px] border-t-solid border-t-drawer  ]"></div>
                <div className="flex font-[600] text-[14px] text-center p-[8px] cursor-pointer bf-transparent text-anotherCard items-center justify-center w-full rounded-[8px]" tabIndex="0">
                    <img src="https://send.monobank.ua/img/card.svg" alt="Credit Card" className="w-[16px] h-[26px] mr-[8px]" />
                    <div className="card-input-label" id="x-manual-pan">
                        Оплатити карткою
                    </div>
                </div>
            </div>
        </div>
    );

}
