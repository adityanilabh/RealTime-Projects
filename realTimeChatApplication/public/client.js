const socket = io();
let name;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".messageArea");
do {
  name = prompt("please enter your name");
} while (!name);

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});

function sendMessage(msg) {
  let msgs = {
    user: name,
    message: msg,
  };
  appendMessage(msgs, "outgoing");
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");
  let markup = `
       <h4>${msg.user}</h4>
       <p>${msg.message}</p>`;

  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}
