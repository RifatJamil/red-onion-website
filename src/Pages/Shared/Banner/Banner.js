import React from 'react';
import './Banner.css';


const Banner = () => {
     return (
        <div className='banner'>
            <h2 className='banner-slogan'>Best Foods are Waiting For You Daily</h2>
            
            
            {/* input bar starts here  */}
            <div class="input-group w-25 pt-5 mx-auto mb-3">
            
            <input type="text" class="rounded-pill form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> 
  <button class="search-btn rounded-pill btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>




        </div>
    );
};

export default Banner;