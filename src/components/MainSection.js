import React from 'react';
import '../style.css';

const MainSection = () => {
    return (
        <main className='main'>
            <div className='main-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>

            <div className='main-btns'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available On</p>
                
                <div className='brand-icons'>
                    <img src='/flipkart.png ' alt='icon' />
                    <img src='/amazon.png ' alt='icon' />
                </div>
            </div>
            </div>

            <div className='brand-image'>
                <img src='/shoe_image.png' alt='brandImage'/>
            </div>
        </main>
    )
}

export default MainSection
