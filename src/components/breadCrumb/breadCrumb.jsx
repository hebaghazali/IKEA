import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb-container">
          <nav aria-label="breadcrumb" >
            <ol className="breadcrumb breadcrumb-list">
              <li className="breadcrumb-item">
                <a className="bc-breadcrumb__link" href="#">products</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a className="bc-breadcrumb__link" href="#" id='catg-b-crumb'>furniture</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a className="bc-breadcrumb__link" href="#" id='sub-b-crumb'>bed</a>
              </li>
            </ol>
          </nav>
        </div> 
    );
}

export default Breadcrumb;
