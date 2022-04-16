import React from 'react';
import './Header.css'
import logo from  '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
    const element = <FontAwesomeIcon icon={faCartShopping} />

    return (
       <section>
           {/* navbar starts here */}
           <div>
           <nav className="container navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
   {/* navbar img */}
     <a className="navbar-brand" href="#">
     <img width={100} src={logo} alt="" />
    </a>
    
    <div className='d-flex'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{element}</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item px-2">
          <button className='btn btn-danger rounded-pill '>Sign up</button>
        </li>
        
      </ul>
    </div>
    </div>
    </div>
  
</nav>
           </div>
       </section>
    );
};

export default Header;