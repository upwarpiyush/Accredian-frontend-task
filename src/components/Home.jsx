import * as React from 'react';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <div style={{width: '95vw',
      height: '95vh', display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
          <h1>Home Page</h1>
      </div>
    </div>
    
  );
}