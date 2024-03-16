import React from 'react'

export default function CardFooter(){
    return(
        <div className="card_footer flex justify-between items-center text-white mt-[18px] mb-[16px] max-w-[990px] w-full">
          <div className="footer_info font-[500] text-[12px] leading-[16px] opacity-80">
            <p>АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від </p>
            <p>20.01.1994, у держреєстрі банків №226</p>
            
          </div>
          <div className="footer_buttons flex justify-between">
            <div className="widget-button flex relative border-[0.5px] border-solid border-footBorder bg-bgFootBut rounded-[16px] p-[20px] h-[40px] text-white mt-[8px] ml-[10px] font-[600] text[14px] leading-[24px] items-center cursor-pointer" tabindex="0">
              <div className="widget-button-icon flex items-center">
                <img src="https://send.monobank.ua/img/cup.svg"/>
                <div className="widget-button-icon-text ml-[8px]">
                  Провести розіграш
                </div>
              </div>
            </div>
            <div className="widget-button flex relative border-[0.5px] border-solid border-footBorder bg-bgFootBut rounded-[16px] p-[20px] h-[40px] text-white mt-[8px] ml-[10px] font-[600] text[14px] leading-[24px] items-center cursor-pointer" tabindex="0">
              <div className="widget-button-icon flex items-center">
                <img src="https://send.monobank.ua/img/gamepad.svg"/>
                <div className="widget-button-icon-text ml-[8px]">
                  Віджет для стрімів
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}