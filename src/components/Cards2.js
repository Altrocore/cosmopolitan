import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards'>
      <h1>Our EcoSystem!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-15.jpeg'
              text='Our Cosmopolitan minecraft server'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-16.jpeg'
              text="Our Chess club in Newfoundland St. John's"
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-17.webp'
              text='Blockchain Cosmopolitan'
              label='Technology'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;