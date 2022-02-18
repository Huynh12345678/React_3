import React from 'react';
import { Link } from 'react-router-dom';
import handleDate from '../../helpers/handleDate';
import { no_poster } from '../../assets';


const Episodes = ({ data }) => {
  // console.log(data);

  return (
    <div className='episode'>
      <h4>Episodes <span>{data.episode_count}</span></h4>
      {
        data.episodes.map(item => (
          <div className='card' key={item.id}>
            <div className='wrapped' key={item.id}>
              <div className='wrapImg'>
                <img src={item.still_path} alt="" loading='lazy'
                  onError={(e) => {
                    e.currentTarget.onerror = null; // prevents looping
                    e.currentTarget.src = no_poster;
                    e.currentTarget.style.transform = 'scale(0.5)';
                    e.currentTarget.style.objectFit = 'contain';
                  }}
                  onLoad={({ currentTarget }) => {
                    currentTarget.style.opacity = 1;
                  }}
                />
              </div>
              <div className="root w-100">
                <h5>{item.episode_number}&nbsp;<span>&#9733; &nbsp;{parseFloat(item.vote_average).toFixed(1)}</span> {item.name} <small>{handleDate(item.air_date)}</small></h5>
                <p className='mb-0'>{item.overview !== '' ? item.overview : "We don't have an overview translated in English."}</p>
              </div>
            </div>
            <div className='expand'>
              <p className='mb-0'>&#9654; &nbsp;Watch Now</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Episodes;