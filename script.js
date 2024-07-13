document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username') || 'User';
    document.getElementById('username').textContent = username;
});
