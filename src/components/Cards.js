import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-n2.jpg'
              text='Explore amazing drawing room designs'
              label='Interior'
              path='/services'
            />
            <CardItem
              src='images/img-n4.jpg'
              text='Wall Mounted TV unit with Storage drawers'
              label='TV areas'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-n5.jpg'
              text='Explore more than just modular design ideas with our experts.'
              label='Entrance'
              path='/services'
            />
            
            <CardItem
              src='images/img-n7.jpg'
              text='Alluring front designs for your offices.'
              label='Elevation design'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
