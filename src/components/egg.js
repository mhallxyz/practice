import React from 'react';
import {Link} from 'react-router-dom';

const Egg = props => {
  return(
    <div>
      <p>egg page</p>
      <Link to='/sports'>Sports Link</Link>
    </div>
  )
}

export default Egg