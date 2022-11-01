import React, { useState } from 'react';

import { ICard } from '../../Main/cards';

import more from '../../../assets/svg/more.svg';
import close from '../../../assets/svg/close.svg';
import img from '../../../assets/images/POSTER.jpg';

import './Card.scss';

function Card({ posterUrl, name, genre, year, id }: ICard): JSX.Element {
  const [isSettingsShowing, setIsSettingsShowing] = useState(false);

  function onButtonClick(): void {
    setIsSettingsShowing((p) => !p);
  }

  function onEditClick(): void {
    setIsSettingsShowing(false);
  }

  function onDeleteClick(): void {
    setIsSettingsShowing(false);
  }

  return (
    <li className="card">
      <img className="poster" src={img} alt={name} />
      <div className="description">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
        <p className="year">{year}</p>
      </div>
      {!isSettingsShowing ? (
        <button onClick={onButtonClick} className="more" type="button">
          <img src={more} alt="more" />
        </button>
      ) : (
        <div className="settings">
          <button onClick={onButtonClick} className="close" type="button">
            <img src={close} alt="close" />
          </button>
          <button onClick={onEditClick} className="edit" type="button">
            Edit
          </button>
          <button onClick={onDeleteClick} className="delete" type="button">
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Card;
