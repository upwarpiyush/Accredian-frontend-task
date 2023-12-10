import * as React from 'react';

export default function Dashboard() {
  return (
    <div>
      {/* <NavBar /> */}
      <div style={{width: '95vw',
      height: '95vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
          <h1>Dashboard Page</h1>
          <div>
            You are logged innn...
          </div>
      </div>
    </div>
    
  );
}