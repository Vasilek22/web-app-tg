import React from 'react'
import s from './Card.module.css'

export default function Card() {
  return (
    <div className={s.card}>
      <div className={s.cardContent}>
        <img className={s.cardImage} src="https://avatars.mds.yandex.net/i?id=586060eb0fe3f58c528eb540ac831ca1_l-10778769-images-thumbs&n=13" alt="Изображение трека" />
        <div className={s.trackInfo}>
          <p className={s.trackName}>Холостяк</p>
          <p className={s.artistName}>Егор Крид</p>
        </div>    
      </div>
      <div className={s.cardFooter}>
        <span className={s.trackDuration}>1:21</span>
        <svg className={s.trackFav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
