import React from 'react';

const HomeWorld = props =>{ 
    props.world.map(world =>{
        fetch(world.homeworld)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        });
    })
}

export default HomeWorld;