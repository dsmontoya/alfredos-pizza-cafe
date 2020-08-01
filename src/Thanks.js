import React, {useEffect} from 'react';

function Thanks(props) {
  useEffect(()=>{
    props.onVisit();
  });
  
  return (
    <div>
      <h2></h2>
      <div className="Message Message--state-ok">
        Thanks for your purchase!
      </div>
    </div>
  )
}

export default Thanks;