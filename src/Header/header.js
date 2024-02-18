import React from 'react';
import './header.css';
import shape  from './images/shape.png';
import instagram  from './images/instagram.png';
import arrowleft from './images/arrowleft.png';
import arrowright from './images/arrowright.png';
import glass from './images/glass.png';
import { useState, useRef } from 'react';
import { useClickOutside } from './hooks/useClickOutside';
import { AiFillBank } from 'react-icons/ai';
import { AiFillCrown } from 'react-icons/ai';
import { AiFillApi } from 'react-icons/ai';
import { AiFillEnvironment } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import { ImCheckmark } from 'react-icons/im';
import { ImCancelCircle } from 'react-icons/im';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';






 export function  Head() {
    const [click, setClick] = useState(false);
    const menuRef = useRef(null); 
    useClickOutside(menuRef, () => {
        if (click) setTimeout(() => setClick(false), 100)
    });
    const [img, setImg] = useState(false);
    const onKeyDown = (ev) => {
            if (ev.key === 'Enter') {
                setImg(!img);
            }
    }

    const [reg, setReg] = useState(false);
    const [success, setSuccess] = useState(false);
    const onKeySuccess = (ev) => {
        if (ev.key === 'Enter') {
                setSuccess(!success);
                setCancel(!cancel);
        }
};
    const [cancel, setCancel] = useState(false);

    const inputRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordElement = passwordRef.current;

    const send = () => {
        let re_1  = /[\D]/g;
        let re_2 = /\d/g;
        const inputElement = inputRef.current;

        // This is false
        inputElement.value.match(re_2) ? setReg(!reg): setReg(reg);
        inputElement.value.match(re_2) ? setCancel(!cancel): setCancel(cancel);
        passwordElement.value.match(re_1) ? setCancel(!cancel): setCancel(cancel); 

        // This is true
        inputElement.value.match(re_1) ? setReg(!reg): setReg(reg);
        inputElement.value.match(re_1) ? setSuccess(!success): setSuccess(success);
        passwordElement.value.match(re_2) ? setSuccess(!success): setSuccess(success); 
    }

    const [pass, setPass] = useState(false);

    const show_hide_password = () => {

         if (passwordElement.getAttribute('type') == 'password') {
             passwordElement.setAttribute('type', 'text');   
           } 
         else {
            passwordElement.setAttribute('type', 'password'); 
           }
        setPass(!pass)  
    };


    return (
        <>
        <div className='head'>
            <div className="header_1">
                <div className='image_1'>
                    <img src={instagram} />
                    <h1>LEO IMAGES</h1>   
                </div>
                <div className='image_2' onClick={() => setClick(!click)}><img src={shape} /></div>
            </div>
            <div className="header_2">
                <div className={`list ${click ? 'active': ''}`} ref={menuRef}>
                        <ul className='textList'>
                            <li className='item'>
                                    <a href='#'>
                                    <AiFillBank className='icon' />
                                   <span>History</span>
                                   </a> 
                            </li>
                            <li className='item'>
                                <a href='#'>
                                <AiFillCrown className='icon' />
                                <span>About</span>
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#'>
                                <AiFillApi className='icon' />
                               <span>Service</span> 
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#'>
                                <AiFillEnvironment className='icon' />
                                <span>Location</span>
                                </a>
                            </li>
                            <li className='item'>
                                <a href='#'>
                                <AiFillContacts className='icon' />
                                <span>Contacts</span>
                                </a>
                            </li>
                        </ul>    
                </div>
                <div className='clear'></div>
            </div> 
            <div className="arrowleft">
                <div>  
                    <img src={arrowleft} alt='arrowleft' />
                </div>      
            </div>
            <div className="search">
                <h2>Photos, illustrations by <br />creatives all over the world.</h2>
                <div className='inputsearch'>
                    <input type='text' placeholder='People walking' className='input'  onKeyDown={onKeyDown}></input>
                    <img src={glass} className='glass' onClick={() => setImg(!img)} />
                </div>
            </div>
            <div className="arrowright">
                    <img src={arrowright} alt='arrowright' />
            </div> 
            <div className={`openwin ${img ? 'activewin': ''}`}>
                <h3>Successful!<br/>Result posted
                <PiAirplaneTiltBold className='icon_2' />
                <br />Waiting...</h3>
                <button className='click' onClick={() => setImg(!img)}>ОК</button>
            </div>
            <div className='clear'></div>
            <div className={`reg_open ${reg ? 'active_reg': ''}`}>
                <div className="close" onClick={() => setReg(!reg)}>X</div>
                <ul className='firstname'>
                    <li className='li_1'>Firstname:</li>
                    <li><input type='text' placeholder='Enter only letters' name='firstname' ref={inputRef}/></li>
                </ul>
                <div className='clear'></div>
                <ul className='secondname'>
                    <li className='li_2'>Name:</li>
                    <li><input type='text' placeholder='Enter only letters' name='name' ref={inputRef}/></li>
                </ul>
                <ul className='thirdname'>
                    <li className='li_3'>Login:</li>
                    <li><input type='text' placeholder='Enter only letters' name='login' ref={inputRef}/></li>
                </ul>
                <ul className='fourname'>
                    <li className='li_4'>Password:</li>
                    <li>
                        <div className='li_4_password'>  
                            <input type='password' className='password' placeholder='Enter only numbers' name='password' ref={passwordRef} onKeyDown={onKeySuccess}/>
                        </div>
                        <div className='eye' onClick={show_hide_password}>
                            <AiFillEyeInvisible className={`icon_5 ${pass ? 'active_click': ''}`}/>
                            <AiFillEye className='icon_5' />
                        </div>    
                    </li>
                </ul>
                <div className='button' onClick={send}>Send...</div>
                <div className='clear'></div>
            </div>
            <div className='clear'></div>
            <div className={`successful ${success ? 'active_successful': ''}`}>
                    <h3>You are successfully register!
                    <ImCheckmark className='icon_3' />  </h3>
                    <button className='click_2' onClick={() => setSuccess(!success)}>OK</button>
            </div>
            <div className={`cancel ${cancel ? 'active_cancel': ''}`}>
                    <h3>Error...<br/>You are not register!  
                    <ImCancelCircle className='icon_4' /></h3>
                   <button className='click_3' onClick={() => setCancel(!cancel)}>OK</button> 
            </div>
        </div>
        <div className="avarage">
            <div className="account">
                <p>Create a free account now</p>
            </div>
            <div className='button_reg' onClick={() => setReg(!reg)}>Register now</div>
            <div className="border"></div> 
        </div>
      </>
    )
}


// задать кнопки меню справа фон; V
// сделать прозрачный фон для Head; V
// сделать выпадающий список; V
// повторить всё вышесделанное в теории V
// доработать блок search V
// применить к блоку search поиск V
    // 1. применить стили к окну openwin V
    // 2. применить jsx к окну openwin по образцу V
// прочитать документацию по onKeyDown   V  
// доделать всплывающее окно V
// запустить hook V
// доработать окно по css V
// сделать кнопку send V
// проработать блок successful, cancel без пробелов V
// сделать рабочую кнопку OK на successful, cancel V
// пофиксить баги на окна successful и cancel (не указан cancel в onKeysuccess) V
// разработать регулярное выражение на корректный ввод и вывод данных от пользователя V
// сделать видимым-невидимым  блок password V
// сверстать блок footer
    // перечитать документации Router V
    //создать роутеры

