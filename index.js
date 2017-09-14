const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

$("#youtubesearch").on('submit', (event)=>{
  event.preventDefault()
  $('#results').html('')
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    type:'GET',
    dataType: 'json',
    success: (data) => {
      for(const item of data.items) {
        console.log(item.snippet)
        displayResults(item.snippet)
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

const displayResults = (result) => {
  $('#results').append(`
      <img id="questionImage" src="${result.thumbnails.medium.url}" alt="${result.description}">
      <p>${result.title}</p>
    `)
}




//clear upon new submission
//Make the images clickable, leading the user to the YouTube video, on YouTube
//Make the images clickable, playing them in a lightbox
//Show a link for more from the channel that each video came from
//Show buttons to get more results (using the previous and next page links from the JSON)
