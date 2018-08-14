import React from 'react'
import EpisodeSelector from '../components/EpisodeSelector.js'
import EpisodeDetail from '../components/EpisodeDetail.js'

class EpisodeContainer extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      episodes: [],
      currentEpisode: null
    }
    this.handleEpisodeSelected = this.handleEpisodeSelected.bind(this);
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/episode/")
    .then(responseText => responseText.json())
    // .then(episodes => console.log(episodes.results))
    .then(episodes => this.setState({episodes: episodes.results}))
  }

  handleEpisodeSelected(index){
    const selectedEpisode = this.state.episodes[index];
    this.setState({currentEpisode: selectedEpisode})
  }


  render(){
    return(
      <React.Fragment>
        <h1>Rick and Morty Episodes</h1>
        <EpisodeSelector
          episodes={this.state.episodes}
          onEpisodeSelected={this.handleEpisodeSelected}
        />
          <EpisodeDetail
            episode={this.state.currentEpisode}
          />
        </React.Fragment>
      )
    }
  }

  export default EpisodeContainer;
