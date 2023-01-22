let video = document.querySelector('.html5-main-video');
let currentTime = document.querySelector('.ytp-time-current'); // 1:00

function minutesToHours(minutes){
    let minutesLeft = minutes%60;
    let hours = Math.floor(minutes/60);
    if(hours>1){
        return `${hours}:${minutesLeft}:00`;
    }
    return `${minutesLeft}:00`
}

// List of timers. Example: [1:00:00, 2:00:00]
let timers = []
for(let i=1;i<1000;i++){
    timers.push(minutesToHours(i));
}

console.log(`Timers: ${timers}`)

setInterval(() => {
    let timer = currentTime.textContent;
    if(timer==timers[0]){
        if(video.playbackRate >= 6.0){
            return
        }
        video.playbackRate += 0.1;
        timers.shift();
    }
}, 10);

// setInterval(() => {
//     let timer = currentTime.textContent;
//     if(timers.includes(timer)){
//         if(video.playbackRate >= 6.0){
//             return
//         }
//         video.playbackRate += 0.1;

//         let index = timers.indexOf(timer);
//         timers = timers.splice(index);
//         console.log('Speed changed in time: ' + timers[0]);
//         timers.shift();
//     }
// }, 10);

