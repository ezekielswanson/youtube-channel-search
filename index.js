const apiKey = 'AIzaSyCEUkGWb7OAUjT6ZWGgac9o-_QzpGROy2U';
const channelId = 'UCHa8J-xnRYOg5VuudfWpBgg';


//Fetch videos by search
async function fetchVideos(videoTitle) {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?apikey=${apiKey}&channelId=${channelId}&type=video&maxResults=6&q=${encodeURIComponent(videoTitle)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await res.json()
        console.log(data)
    }

    catch (error) {
        console.error('No videos match your search - Please search another term.:', error);
    }
    
}

//Click event
document.querySelector('.search-form__button').addEventListener('click', function() {
    const videoTitle = document.querySelector('.search-form__input').value;
    if (videoTitle) {
        fetchVideos(videoTitle)
    }

})
