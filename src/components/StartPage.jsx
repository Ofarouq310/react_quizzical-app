import React from 'react'
import blobs from '../assets/blobs.png'
import blobs1 from '../assets/blobs1.png'

export default function () {

    function handleClick () {
        let introPage = document.querySelector('.intro--container')
        introPage.style.display = 'none'; 
    }

  return (
    <div>
        <img src={blobs} alt="blobs" className='object-1' />
        <img src={blobs1} alt="blobs1" className='object-2' />
        <div className='intro--container'>
            <h1 id='intro--header'>Quizzical</h1>
            <p id='intro--description'>Test your knowledge with our quizzes</p>
            <button id='intro--button' onClick={handleClick}>Start quiz</button>
        </div>
    </div>
  )
}
