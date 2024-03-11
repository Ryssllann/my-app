import { Routes, Route, Link } from 'react-router-dom';
import arrow from './images/arrow.png';
import { useState, useEffect } from 'react';
import { 
        Main, 
        Business, 
        Holidays, 
        Backgrounds, 
        Beauty, 
        Buildings,
        Celebrities,
        Editorial,
        Education,
        Food,
        Healthcare,
        Abstract,
        Illustrations,
        Industrial,
        Interiors,
        Miscellaneous,
        Model,
        Nature,
        Objects,
        Parks,
        People,
        Religion,
        Science,
        Signs,
        Arts,
        Sports,
        Technology,
        Transportation,
        Vectors,
        Vintage,
        UpButton
      } from './pages';
import './footer.css';





export function Footer() {

   const [scroll, setScroll] = useState(0);
    
   const handlelScroll = () => {
      setScroll(window.scrollY);
   };
   
   useEffect(() => {
    window.addEventListener('scroll', handlelScroll);
    return () => window.removeEventListener('scroll', handlelScroll)}, []);
    
    return (
        <>
        <h1 className='browse'>BROWSE BY CATEGORY</h1>
        <nav>
            <ul className='ul_1'> 
                <li><Link to='main' className='links'>Main</Link></li>
                <li><Link to='abstract' className='links'>Abstract</Link></li>
                <li><Link to='business' className='links'>Business</Link></li>
                <li><Link to='backgrounds' className='links'>Backgrounds</Link></li>
                <li><Link to='beauty' className='links'>Beauty</Link></li>
                <li><Link to='buildings' className='links'>Buildings</Link></li>
            </ul>
            <ul className='ul_2'>
                <li><Link to='celebrities' className='links'>Celebrities</Link></li>
                <li><Link to='editorial' className='links'>Editorial</Link></li>
                <li><Link to='education' className='links'>Education</Link></li>
                <li><Link to='food' className='links'>Food and Drink</Link></li>
                <li><Link to='healthcare' className='links'>Healthcare</Link></li>
                <li><Link to='holidays' className='links'>Holidays</Link></li>
            </ul>
            <ul className='ul_3'>
                <li><Link to='illustrations' className='links'>Illustrations</Link></li>
                <li><Link to='industrial' className='links'>Industrial</Link></li>
                <li><Link to='interiors' className='links'>Interiors</Link></li>
                <li><Link to='miscellaneous' className='links'>Miscellaneous</Link></li>
                <li><Link to='model' className='links'>Model Released Only</Link></li>
                <li><Link to='nature' className='links'>Nature</Link></li>
            </ul>
            <ul className='ul_4'>
                <li><Link to='objects' className='links'>Objects</Link></li>
                <li><Link to='parks' className='links'>Parks</Link></li>
                <li><Link to='people' className='links'>People</Link></li>
                <li><Link to='religion' className='links'>Religion</Link></li>
                <li><Link to='science' className='links'>Science</Link></li>
                <li><Link to='signs' className='links'>Signs/Symbols</Link></li>
            </ul>
            <ul className='ul_5'>
                <li><Link to='arts' className='links'>Arts</Link></li>
                <li><Link to='sports' className='links'>Sports/Recreation</Link></li>
                <li><Link to='technology' className='links'>Technology</Link></li>
                <li><Link to='transportation' className='links'>Transportation</Link></li>
                <li><Link to='vectors' className='links'>Vectors</Link></li>
                <li><Link to='vintage' className='links'>Vintage</Link></li>
            </ul>
        </nav>
        <div className="clear"></div>
        <nav className={`backArrow ${scroll < 50 ? '' : 'show'}`}>    
            <Link to='http://portfolio.local/' className='upbutton'>
            <div className='arrow'><img src={arrow} /></div>
            BACK</Link>
        </nav>
        
         <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/abstract' element={<Abstract />} />
            <Route path='/business' element={<Business />} />
            <Route path='/backgrounds' element={<Backgrounds />} />
            <Route path='/beauty' element={<Beauty />} />
            <Route path='/buildings' element={<Buildings />} />
            <Route path='/celebrities' element={<Celebrities />} />
            <Route path='/editorial' element={<Editorial />} />
            <Route path='/education' element={<Education />} />
            <Route path='/food' element={<Food />} />
            <Route path='/healthcare' element={<Healthcare />} />
            <Route path='/holidays' element={<Holidays />} />
            <Route path='/illustrations' element={<Illustrations />} />
            <Route path='/industrial' element={<Industrial />} />
            <Route path='/interiors' element={<Interiors />} />
            <Route path='/miscellaneous' element={<Miscellaneous />} />
            <Route path='/model' element={<Model />} />
            <Route path='/nature' element={<Nature />} />
            <Route path='/objects' element={<Objects />} />
            <Route path='/parks' element={<Parks />} />
            <Route path='/people' element={<People />} />
            <Route path='/religion' element={<Religion />} />
            <Route path='/science' element={<Science />} />
            <Route path='/signs' element={<Signs />} />

            <Route path='/arts' element={<Arts />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/transportation' element={<Transportation />} />
            <Route path='/vectors' element={<Vectors />} />
            <Route path='/vintage' element={<Vintage />} />
            <Route path='https://ryssllann.github.io/myportfolio/' element={<UpButton />} />
        </Routes>
        <div className="clear"></div>
        <footer><h3>Copyright &#169; 2024 My Portfolio</h3></footer>
        </>     
  
    )
}

//Добавить Router and Link для 4-й колонки V
// Добавить крайний footer V
// Реализовать на кнопку upbutton JSX V
// Разместить project на GitHub