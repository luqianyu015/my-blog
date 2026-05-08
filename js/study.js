const noteImages = [
    "../image/note1.jpg",
    "../image/note2.jpg",
    "../image/note3.jpg",
    "../image/note4.jpg",
    "../image/note5.jpg",
    "../image/note6.jpg"
];

let currentPage = 1;
const totalPages = noteImages.length;
const currentNote = document.getElementById("currentNote");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updatePage() {
    currentNote.src = noteImages[currentPage - 1];
    pageInfo.textContent = `第 ${currentPage} / ${totalPages} 页`;
}

prevBtn.addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    } else {
        alert("已经是第一页啦！");
    }
});

nextBtn.addEventListener("click", function() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    } else {
        alert("已经是最后一页啦！");
    }
});