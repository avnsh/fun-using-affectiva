const moodToQueryMap = {
    anger: 'In the Wee Small Hours of the Morning',
    disgust: 'Strawberry Fields Forever',
    fear: 'Trust in You',
    joy: 'uptown funk',
    sadness: 'my heart will go on',
    surprise: 'Bob Dylan Greatest Hits',
};
const apiKey = "AIzaSyDBPzjEDZK_ZGOZcYQT7lm0VTdzjp5w95w";
const content = document.getElementById('content');
const currentEmotion = document.getElementById('currentEmotion');

function playVideo(mood) {
    currentEmotion.innerHTML = mood;
    makeApiCall(moodToQueryMap[mood]).then(function (videoId) {
        // set content with video id
        content.innerHTML = `
        <iframe id="video" width="420" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1"></iframe>
        `
    });
}

function makeApiCall(query) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${query}&key=${apiKey}`)
    .then(res => res.json())
    .then(function(resp) {
      return resp.items[0].id.videoId;
    }).catch(err => console.log(err));
}
