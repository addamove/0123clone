import React from 'react'
import poster from '../../assets/poster1.jpg'
import classes from './MovieCard.css'
import FaPlay from 'react-icons/lib/fa/play'

const movieCard = () => {
    return (
        <div className={classes.gallery}>
            <a href="#1" className={classes.imgLink }>
            <img src={poster} alt="Картинка 1" className={classes.img} width="300" height="130" />
            <div className={classes.coverBg }></div>
            <p className={classes.coverTitle}><FaPlay  size={42} /></p>
            <div className={classes.Text}>  <span>MovieName</span>  </div>
            </a>
        </div>
        // <div className={classes.Card}>
        //     <div className={classes.Wrapper}>
        //         <p>Play</p>
        //         <img src={poster} alt="poster"/>
        //         
              
        //     </div>
            
        // </div>
    );
}



export default movieCard;