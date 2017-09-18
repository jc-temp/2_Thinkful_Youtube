const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

$("#youtubesearch").on('submit', (event)=>{
  $('#results').html('')
  event.preventDefault()
  $('#results').html('')
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    type:'GET',
    dataType: 'json',
    success: (data) => {
      for(const item of data.items) {
        //console.log(item.snippet)
        displayResults(item)
        //fix call to item only
      }
    },
    data:{
      part: 'snippet',
      key: 'AIzaSyB2IUbRCb6hYut8z68W1tXzqOUS7GZW6xs',
      q: $('#q').val()

    }
  }
  $.ajax(settings)
}
)

const displayResults = (results) => {
  console.log(results.nextPageToken)
  $('#results').append(`
      <div class="card">
        <div class="inner-wrapper">
          <div>
            <a href="https://www.youtube.com/watch?v=${results.snippet.videoId}">
            <img id="questionImage" src="${results.snippet.thumbnails.medium.url}" alt="${results.snippet.description}"></a>
            <span>${results.snippet.title}: <a href='https://www.youtube.com/channel/${results.id.channelId}'> more this from channel&hellip;</a></span>
          </div>
        </div>
      </div>
    `)
}

const lightBox = () =>{

}





//Make the images clickable, playing them in a lightbox
//Show buttons to get more results (using the previous and next page links from the JSON)
