const readAll = document.querySelector(".read-all");
const unreadCounter = document.querySelector(".unread-num");
const unreadMessages = document.querySelectorAll(".unread");
const unreadMessageDivs = document.querySelectorAll(".unread-msg");

// Read all messages when "Read All" button is clicked
readAll.addEventListener("click", () => {
  unreadMessages.forEach((message) => {
    message.classList.remove("unread");
  });
  unreadMessageDivs.forEach((messageDiv) => {
    messageDiv.classList.remove("unread-msg");
  });
  unreadCounter.textContent = "0";
});

// Mark individual message as read when the message is clicked
let unreadCount = parseInt(unreadCounter.textContent.trim());
unreadMessageDivs.forEach((messageDiv) => {
  messageDiv.addEventListener("click", () => {
    messageDiv.childNodes[3].childNodes[1].classList.remove("unread");
    messageDiv.classList.remove("unread-msg");
    if (unreadCount > 0) {
      unreadCounter.textContent = `${--unreadCount}`;
    }
  });
});
