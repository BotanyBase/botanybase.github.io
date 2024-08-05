const authToken == localStorage.get('authToken');
const authStatus == localStorage.get('auth');

if (authStatus == 1) {
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hours % 12 || 12}:${minutes < 10 ? "0" + minutes : minutes}${ampm}`;
    return formattedDate;
}

fetch('https://x8ki-letl-twmt.n7.xano.io/api:iGbUspz7/auth/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem(authToken) // Use the stored JWT
  }
})
.then((response) => response.json())
.then((data) => {

})
.catch((error) => {
  console.error(error);
});
}

