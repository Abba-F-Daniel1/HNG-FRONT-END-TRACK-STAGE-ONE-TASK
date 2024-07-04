function updateDateTime() {
  const now = new Date();
  const utcTimeElement = document.getElementById('utcTime');
  const currentDayElement = document.getElementById('currentDay');

  // Format UTC time
  const utcTimeString = now.toUTCString().split(' ')[4];
  utcTimeElement.textContent = utcTimeString;

  // Get current day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[now.getUTCDay()];
  currentDayElement.textContent = currentDay;
}

// Update time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);


// Placeholder function to simulate fetching Slack profile information
function fetchSlackProfile() {
    const slackDisplayName = "Daniel Abba Frederick"; 
  const slackEmail = "abba.fred.daniel@gmail.com"; 
  const slackProfilePicUrl = "https://ca.slack-edge.com/T05FFAA91JP-U05RMPCGMSM-d88e1d9e23d5-512"; 

  document.querySelector('[data-testid="slackDisplayName"]').textContent = slackDisplayName;
  document.querySelector('[data-testid="slackEmail"]').textContent = slackEmail;
  document.querySelector('[data-testid="slackProfilePicture"]').src = slackProfilePicUrl;
}

// Call the function to populate Slack profile information
fetchSlackProfile();
