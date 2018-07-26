import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = props => {
  return(
    <div>
      <NavLink className="links" to='/'>Home</NavLink>
      <NavLink className="links" to='/egg'>Egg</NavLink>
      <NavLink className="links" to='/sports'>Sports</NavLink>
    </div>
  )
}

export default Navigation