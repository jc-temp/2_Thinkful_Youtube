const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

$("#youtubesearch").on('submit', (event)=>{
  $('#results').html('')
  event.preventDefault()
//  $('#results').html('')
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    type:'GET',
    dataType: 'json',
    data:{
      part: 'snippet',
      key: 'AIzaSyB2IUbRCb6hYut8z68W1tXzqOUS7GZW6xs',
      q: $('#q').val()
    },
    success: (data) => {
      console.log(data.nextPageToken)
      for(const item of data.items) {
        //console.log(item.snippet)
        displayResults(item)
      }
    },
    failure: (error) => {
      console.log('api error')
    }
  }
  $.ajax(settings)
  $('#q').val('')
}
)

const displayResults = (results) => {
  $('#results').append(`
      <div class="card">
        <div class="inner-wrapper">
          <div>
            <a href="#" id="video${results.id.videoId}">
              <img id="questionImage" src="${results.snippet.thumbnails.medium.url}" alt="${results.snippet.description}">
            </a>
            <span>${results.snippet.title}: <a href='https://www.youtube.com/channel/${results.id.channelId}'> more this from channel&hellip;</a></span>
          </div>
        </div>
      </div>
    `)
    lightBox(results.id.videoId)
}

const lightBox = (videoId) =>{
  $(`#video${videoId}`).on('click', (event) => {
    console.log(videoId)
    $('#lightbox').append(`
      <div class="backdrop">
        <div class="videoContainer">
          <a href="#" id="close">x</a>
          <iframe width="320" height="240"
          src="https://www.youtube.com/embed/${videoId}">
          </iframe>
        </div>
      </div>
  `)
    $('#close').on('click', (event) =>{
      $('#lightbox').html('')
    })
  }
  )
}
//Make the images clickable, playing them in a lightbox
//Show buttons to get more results (using the previous and next page links from the JSON)
