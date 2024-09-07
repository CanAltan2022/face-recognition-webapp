import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
	return (
	<div className='ma4 mt0'>
	<Tilt>
      <div className="Tilt br2 shadow-2 " style={{ height: '100px', width: '150px' }}>
        <h1>React Parallax Tilt</h1>
      </div>
    </Tilt>
	</div>

);

} 

export default Logo;