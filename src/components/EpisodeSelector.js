import React from 'react';

const EpisodeSelector = (props) =>{
  console.log(props);
  const options = props.episodes.map((episode, index) => {
    return <option value={index} key={index}>{episode.name}</option>
  })

  function handleChange(event){
    //console.log(event.target.value);
    props.onEpisodeSelected(event.target.value);
  }

  return(
    <select name="episode-selector" id="episode-selector" onChange={handleChange}>
      <option disabled selected>Select a Episode</option>
      {options}
    </select>
  );
}

export default EpisodeSelector;
