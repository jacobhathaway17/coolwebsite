function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageContainer = document.getElementById("message-container");

    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerText = messageText;

        messageContainer.appendChild(messageElement);

        messageInput.value = "";
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}
