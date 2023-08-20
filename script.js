const userDataDiv = document.getElementById("userData");
const nextButton = document.getElementById("nextButton");

let users = [];
let currentUserIndex = 0;

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    users = data;
    displayUserData();
  } catch (error) {
    userDataDiv.textContent = "Error fetching user data.";
  }
}

function displayUserData() {
  const currentUser = users[currentUserIndex];
  userDataDiv.innerHTML = `
    <p><strong>Name:</strong> ${currentUser.name}</p>
    <p><strong>Username:</strong> ${currentUser.username}</p>
    <p><strong>Email:</strong> ${currentUser.email}</p>
  `;
}

nextButton.addEventListener("click", () => {
  currentUserIndex = (currentUserIndex + 1) % users.length;
  displayUserData();
});

fetchUsers();
