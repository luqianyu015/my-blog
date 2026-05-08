const form = document.getElementById("messageForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let content = document.getElementById("content").value.trim();

    if (name === "") {
        alert("请输入你的名字！");
        return;
    }
    if (contact === "") {
        alert("请输入联系方式！");
        return;
    }
    if (content === "") {
        alert("留言内容不能为空！");
        return;
    }

    alert("留言提交成功！感谢你的留言～");
    form.reset();
});