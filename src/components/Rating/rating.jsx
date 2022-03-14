import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./rating.css";

const Rating = () => {
  const [rating, setRating] = useState();

  return (
    <div>
      <Link
        className="rate"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        
<FaStar size={15} color={'black'}/>
<FaStar size={15} color={'black'} />
<FaStar size={15} color={'black'} />
<FaStar size={15} color={'black'} />
<FaStar size={15} color={'black'} />

<small style={{color: 'black',fontSize:15}}> {rating}</small>
      </Link>


      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
        
        <div >
          <h5 id="offcanvasRightLabel " className="header">Reviews</h5>
             <h4 style={{fontSize:25,fontWeight:'bold',marginBottom:0}}> {rating} </h4>
          </div>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>

        </div>
    

    <div className="ratingVal">
      {[...Array(5)].map((star,index)=>{
                const ratingValue = index +1;
                return(
                    <label key={index}>
                        <input type="radio" name="rating" value={ratingValue}
                          onClick={()=>{ setRating(ratingValue)}}
                          // onChange={() => setRating(index)}
                        />
                        <FaStar className='star' size={20} 
                         color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                        />
                    </label>
                  
                )
            })}
</div>

   <div>
         <h5 style={{backgroundColor:'red',color:'black'}}>Average customer ratings</h5>
         
            </div>         
    </div>

    </div>
  );
};

export default Rating;
