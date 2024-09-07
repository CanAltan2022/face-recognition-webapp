import React from 'react';
import Tilt from 'react-parallax-tilt';
import brainicon from './artificial-intelligence_900961.png';
import './Logo.css';

const Logo = () => {
	return (
	 <Tilt className='Tilt br2 shadow-2' style={{ height: '200px',width: '200px'}}>
        <div className='pa4'>
        	<img alt='icon' src={brainicon}/>
        </div>
    </Tilt>

);

} 

export default Logo;