import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className="lclascl">
              <div className="CardItem_image"></div>
              <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
              <label>Amazfit</label>
            </div>        
          </ul>
          <ul className='cards__items'>
            <div className="lclascl">
              <div className="Amazfit_gts_2"></div>
              <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
                <label>Amazfit gts 2</label>
            </div>
          </ul>        
          <ul className='cards__items'>
            <div className="lclascl">
              <div className="haylou_gt_5"></div>
                <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
                <label>haylou_gt_5</label>
            </div>
          </ul>
          <ul className='cards__items'>
            <div className="lclascl">
              <div className="Huawey_Watch_fit"> </div>
              <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
                  <label>Huawey_Watch_fit</label> 
            </div>
          </ul>
          <ul className='cards__items'>
            <div className="lclascl">
              <div className="Mi_10_lite"></div>
              <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
              <label>Mi 10 lite</label>
            </div>
          </ul>
          <ul className='cards__items'>
            <div className="lclascl">
            <div className="mi_10t_pro"></div>
            <h2>Explore the hidden waterfall deep inside the Amazon Jungle</h2>
            <label>Mi 10t pro</label>
          </div>
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
