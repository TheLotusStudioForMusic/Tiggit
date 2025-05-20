// Read the key from the URL
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');

// Set your secret key here
const validKey = "abc123";

if (key === validKey) {
  // Hide the key from the address bar
  history.replaceState({}, document.title, window.location.pathname);

  // Show the protected content
  document.getElementById("message").style.display = "none";
  document.getElementById("content").style.display = "block";

  // Load Samply content
  const part1 = "https://samply.app";
  const part2 = "/p/FheXiWum6aAK4IyyUX1h";
  document.getElementById("samply").src = part1 + part2;
} else {
  // If the key is missing or wrong
  document.getElementById("message").innerText = "❌ Access denied. Invalid or missing tag.";
}
