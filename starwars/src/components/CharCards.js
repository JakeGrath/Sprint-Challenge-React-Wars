import React from 'react';
import './StarWars.css'
import HomeWorld from './HomeWorld';

const CharList = props => {
    return (
        <div>
            {props.charData.map(char => 
            <div className='characterProfile'>
            <h2 class='characterName'>{char.name}</h2>
            <div class='stat'>
            <h3>Gender:</h3>  
            <h4>{char.gender}</h4>
            </div>

            <div class='stat'>
            <h3>Birth Year:</h3>  
            <h4>{char.birth_year}</h4>
            </div>

            <div class='stat'>
            <h3>Eye Color:</h3>  
            <h4>{char.eye_color}</h4>
            </div>

            <div class='stat'>
            <h3>Hair Color:</h3>  
            <h4>{char.hair_color}</h4>
            </div>

            <div class='stat'>
            <h3>Skin Color:</h3>  
            <h4>{char.skin_color}</h4>
            </div>

            <div class='stat'>
            <h3>Height:</h3>  
            <h4>{char.height + ' cm'}</h4>
            </div>

            <div class='stat'>
            <h3>Weight:</h3>  
            <h4>{char.mass + ' kg'}</h4>
            </div>
{/* 
            <h3 class='stat'>Birth Year: {char.birth_year}</h3> 
            <h3 class='stat'>Eye Color: {char.eye_color}</h3> 
            <h3 class='stat'>Hair Color: {char.hair_color}</h3>
            <h3 class='stat'>Skin Color: {char.skin_color}</h3>  
            <h3 class='stat'>Height: {char.height + ' cm'}</h3> 
            <h3 class='stat'>Weight: {char.mass + ' Kg'}</h3>  */}
            {/* <HomeWorld world={props.charData}/> */}
            </div>)}
        </div>
    )
}

export default CharList