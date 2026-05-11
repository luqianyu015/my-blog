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
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()];

  // 头部日期
  document.getElementById('calendar-head').innerText = `${year}-${month+1} ${week}`;

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
    cover: "../music/starboyimg.jpg" ,
    name: "Starboy"     // 专辑封面地址
  },
  {
    src: "../music/yellow.mp3",
    cover: "../music/yellowimg.jpg",
    name: "Yellow"
  },
  {
    src: "../music/reality.mp3",
    cover: "../music/realityimg.jpg",
    name: "Reality"
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
const playlistItems = document.querySelectorAll('.playlist-item');

let currentIndex = 0;
let isPlaying = false;

// 初始化加载第一首歌
function loadSong(index) {
  const song = playlist[index];
  audio.src = song.src;
  albumCover.style.backgroundImage = `url(${song.cover})`;
  updatePlaylistHighlight();
}

// 播放/暂停控制
function togglePlay() {
  if (!isPlaying) {
    audio.play();
    record.style.animationPlayState = 'running';
    tonearm.style.transform = 'rotate(30deg)';
    // 切暂停图标
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    isPlaying = true;
  } else {
    audio.pause();
    record.style.animationPlayState = 'paused';
    tonearm.style.transform = 'rotate(15deg)';
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

// 更新歌单高亮：移除所有active，给当前索引加active
function updatePlaylistHighlight() {
  playlistItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// 点击歌单项直接播放对应歌曲
playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    // 获取歌单项的索引（对应data-index）
    currentIndex = parseInt(item.dataset.index);
    loadSong(currentIndex);
    // 如果正在播放，直接播放新歌曲；如果暂停，保持暂停
    if (isPlaying) {
      audio.play();
    }
  });
});

// 上一首
function prevSong() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

// 下一首
function nextSong() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  if (isPlaying) audio.play();
}

// 播放完自动下一首（也会自动高亮）
audio.addEventListener('ended', () => {
  nextSong();
});

// Todo List
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 从本地存储加载待办项
function loadTodos() {
  // 读取本地存储的todo数据，没有则为空数组
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  // 清空现有列表，避免重复渲染
  todoList.innerHTML = '';
  // 渲染所有待办项
  todos.forEach(todoText => {
    addTodoItem(todoText);
  });
}

// 【新增】添加单个待办项（封装成函数，方便复用）
function addTodoItem(todoText) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    ${todoText}
    <button onclick="deleteTodo(this, '${todoText}')">×</button>
  `;
  todoList.appendChild(li);
}

// 【新增】保存待办项到本地存储
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 【新增】删除待办项（同步本地存储）
function deleteTodo(btn, todoText) {
  // 从DOM移除
  btn.parentElement.remove();
  // 读取现有todo
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  // 过滤掉要删除的项
  const newTodos = todos.filter(text => text !== todoText);
  // 保存到本地存储
  saveTodos(newTodos);
}

// 添加新待办（按回车）
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && todoInput.value.trim()) {
    const todoText = todoInput.value.trim();
    // 1. 添加到页面
    addTodoItem(todoText);
    // 2. 读取现有todo
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    // 3. 新增项加入数组
    todos.push(todoText);
    // 4. 保存到本地存储
    saveTodos(todos);
    // 5. 清空输入框
    todoInput.value = '';
  }
});

// 页面加载时自动加载本地存储的待办项
window.onload = loadTodos;

// JS（加在现有JS末尾）
const quotes = [
  "Music is the refuge of the soul",
  "Code and melody are both ways of expression",
  "Keep loving, keep going",
];
let quoteIndex = 0;
function rotateQuote() {
  document.getElementById('quote-text').textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
// 5秒轮换一次
setInterval(rotateQuote, 5000);
rotateQuote();