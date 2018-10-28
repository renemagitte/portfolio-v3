
const lastFm = (function() {

  var _recentTracksArray;
  var _songsElement = document.querySelector('.lastfm-songs');

  return {

    fetchSongs: function(){
      fetch('https://ws.audioscrobbler.com/2.0/?method=User.getRecentTracks&user=VenusOfTheSoup&api_key=e26b796f4961b23b890aa1fe985eb6ff&format=json')
      .then(response => response.json())
      .then(songData => {
        _recentTracksArray = songData.recenttracks.track;
        this.printSongs(_recentTracksArray);
      })
      .catch(function(error){
        _songsElement.insertAdjacentHTML('beforeend', error);
      })
    },

    printSongs: function(songsArray){
      _songsElement.innerHTML = '';

      let tracksString = `
        <p>1. ${songsArray[0].artist['#text']} - ${songsArray[0].name}</p>
        <p>2. ${songsArray[1].artist['#text']} - ${songsArray[1].name}</p> 
        <p>3. ${songsArray[2].artist['#text']} - ${songsArray[2].name}</p>
      `;
      _songsElement.insertAdjacentHTML('beforeend', tracksString);
    }
  }
  
})();



  


