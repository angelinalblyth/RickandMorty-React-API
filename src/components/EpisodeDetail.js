import React from 'react';

const EpisodeDetail = (props)=>{
  if(!props.episode){
    return null;
  }
  return(
    <div>
      <h2>{props.episode.name}</h2>
      <p>Air Date:{props.episode.air_date}</p>
      <p>{props.episode.characters}</p>
</div>
)

}


export default EpisodeDetail;
