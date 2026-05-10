// ======================================
// 实时时钟
// ======================================
function updateTime() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('real-time').innerText = `${h}:${m}`;
}
setInterval(updateTime, 1000);
updateTime();

// ======================================
// 日历渲染
// ======================================
function renderCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const week = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];

  // 头部日期
  document.getElementById('calendar-head').innerText = `${year}年${month+1}月 周${week}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const body = document.getElementById('calendar-body');
  body.innerHTML = '';

  // 空白填充（周一为第一列）
  const empty = firstDay === 0 ? 6 : firstDay - 1;
  for (let i = 0; i < empty; i++) {
    body.innerHTML += `<div class="day"></div>`;
  }

  // 日期
  for (let d = 1; d <= daysInMonth; d++) {
    if (d === today) {
      body.innerHTML += `<div class="day today">${d}</div>`;
    } else {
      body.innerHTML += `<div class="day">${d}</div>`;
    }
  }
}
renderCalendar();

// 歌曲列表：在这里添加你的音乐
const playlist = [
  {
    src: "../music/starboy.mp3",      // 音乐文件地址
    cover: "../music/starboyimg.jpg"     // 专辑封面地址
  },
  {
    src: "../music/yellow.mp3",
    cover: "../music/yellowimg.jpg"
  },
  {
    src: "../music/reality.mp3",
    cover: "../music/realityimg.jpg"
  }
  // 可以继续添加更多歌曲
];

// 元素获取
const audio = document.getElementById('audio');
const record = document.getElementById('record');
const tonearm = document.getElementById('tonearm');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const albumCover = document.getElementById('albumCover');

let currentIndex = 0;
let isPlaying = false;

// 初始化加载第一首歌
function loadSong(index) {
  const song = playlist[index];
  audio.src = song.src;
  albumCover.style.backgroundImage = `url(${song.cover})`;
}

// 播放/暂停控制
function togglePlay() {
  if (!isPlaying) {
    audio.play();
    record.style.animationPlayState = 'running';
    tonearm.style.transform = 'rotate(35deg)';
    // 切暂停图标
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    isPlaying = true;
  } else {
    audio.pause();
    record.style.animationPlayState = 'paused';
    tonearm.style.transform = 'rotate(20deg)';
    // 切播放图标
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    isPlaying = false;
  }
}

// 切换上一首
function prevSong() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

// 切换下一首
function nextSong() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

// 歌曲结束自动下一首
audio.addEventListener('ended', () => {
  nextSong();
});

// 绑定事件
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// 初始化加载第一首
loadSong(currentIndex);