const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

$("#youtubesearch").on('submit', (event)=>{
  event.preventDefault()
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    type:'GET',
    dataType: 'json',
    success: (data) => {
      for(const item of data.items) {
        console.log(item.snippet)
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
