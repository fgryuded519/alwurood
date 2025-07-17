
function startStream() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.stream-container').style.display = 'block';
}
function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value;
    if (msg.trim()) {
        const container = document.getElementById('messages');
        const p = document.createElement('p');
        p.textContent = "🙋‍♂️ " + msg;
        container.appendChild(p);
        input.value = '';
    }
}
