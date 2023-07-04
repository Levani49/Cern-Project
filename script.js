function displayClock() {
  var now = new Date();

  // Format and display the date
  var dateElement = document.getElementById("date");
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  dateElement.textContent =
    formatDate(date) + "/" + formatDate(month) + "/" + year;

  // Format and display the time
  var clockElement = document.getElementById("clock");
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  clockElement.textContent =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function formatDate(date) {
  return date < 10 ? "0" + date : date;
}

setInterval(displayClock, 1000);
