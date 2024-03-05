const apiKey = 'AIzaSyCEUkGWb7OAUjT6ZWGgac9o-_QzpGROy2U';
const channelId = 'UCHa8J-xnRYOg5VuudfWpBgg';

// Fetch videos by search
async function fetchVideos(videoTitle) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&type=video&maxResults=6&part=snippet&q=${encodeURIComponent(videoTitle)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('No videos match your search - Please search another term:', error);
    }   
}

// Click event
document.querySelector('.search-form__button').addEventListener('click', function(e) {
    e.preventDefault();

    const videoTitle = document.querySelector('.search-form__input').value;
    if (videoTitle) {
        fetchVideos(videoTitle);
    }
});
