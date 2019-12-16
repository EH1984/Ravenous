import React from 'react';

import './Business.css';

class Business extends React.Component {
  render() {
    const {
      image_url,
      name,
      location,
      category,
      rating,
      reviewCount
    } = this.props.business;
    return (
      <div className='Business'>
        <div className='image-container'>
          <img src={image_url} alt='' />
        </div>
        <h2>{name}</h2>
        <div className='Business-information'>
          <div className='Business-address'>
            <p>{location.address1}</p>
            <p>{location.address2}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
          </div>
          <div className='Business-reviews'>
            <h3>{category}</h3>
            <h3 className='rating'>{rating} stars</h3>
            <p>{reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
