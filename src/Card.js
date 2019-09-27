import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/borobo?200x200' />  
          <div>
            <h2>John Donavan</h2>
            <p>john.donavan@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;