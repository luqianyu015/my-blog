document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("userName").value.trim();
    let msg = document.getElementById("userMsg").value.trim();

    if (!name) {
        alert("请输入名字！");
        return;
    }
    if (!msg) {
        alert("请输入你想对我说的话！");
        return;
    }
    alert("消息发送成功！我会尽快回复你～");
    this.reset();
});