import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {

    const { loader } = useSelector((state) => state.loader);
  //   {{loader}? <div className='text-center'>
  //   <div className='loadingio-spinner-ball-u6x6jkb8i1s'>
  //     <div className='ldio-evnxwkwzfho'>
  //       <div></div>
  //     </div>
  //   </div>
  // </div> : null}
  // return 
    return(
      <div className='text-center'>
      <div className='loadingio-spinner-ball-u6x6jkb8i1s'>
        <div className='ldio-evnxwkwzfho'>
          <div></div>
        </div>
      </div>
    </div>

  );
};

export default Loader;
