const apiKey = 'AIzaSyCEUkGWb7OAUjT6ZWGgac9o-_QzpGROy2U';
const channelId = 'UCHa8J-xnRYOg5VuudfWpBgg';





// Click event
document.querySelector('.search-form__button').addEventListener('click', function(e) {
    e.preventDefault();

    const videoTitle = document.querySelector('.search-form__input').value;
    if (videoTitle) {
        fetchVideosBySearch(videoTitle);

        //more explicit
    }
});


// Fetch videos by search
async function fetchVideosBySearch(videoQuery) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&type=video&maxResults=6&part=snippet&q=${encodeURIComponent(videoQuery)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
       // console.log(data);
        //return data;
        //Invoke renderSearchedVideos(pass in the arugment (data))
        //***Key point inside of the function with the data you need - invoke the funciton with the parameter
        //and padd in the data
        renderSearchedVideos(data)

    } catch (error) {
        console.error('No videos match your search - Please search another video name:', error);
    }   
}

//I want to use the data in this function, so I give it a parameter

//place place holder for that data here so you can use it within this function
function renderSearchedVideos(returnedVideos) {
    console.log(returnedVideos)
}



renderSearchedVideos()














/*
//Render Channel On Load
document.addEventListener('load', function() {
    //invoke my function here

})



async function showChannelOnLoad() {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search`)
    }

}
*/
