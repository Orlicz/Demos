// 要操作的元素
let play_pause=document.querySelector('.play-pause');
let player_track=document.querySelector('.player-track');
let album_cover=document.querySelector('.album-cover');

// 播放暂停
function playPause(){
    if(player_track.classList.contains('active')){
        player_track.classList.remove('active');
        play_pause.querySelector('.fa').classList='fa fa-play';
        album_cover.classList.remove('active');
    }else{
        player_track.classList.add('active');
        play_pause.querySelector('.fa').classList='fa fa-pause';
        album_cover.classList.add('active');
    }
}

// 绑定播放暂停按钮的点击事件
play_pause.addEventListener('click',playPause);