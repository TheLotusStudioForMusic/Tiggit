const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');

// Set your secret key here
const validKey = "abc123";

if (key === validKey) {
  // Remove the key from the visible URL
  history.replaceState({}, document.title, window.location.pathname);

  // Proceed to show content
  document.getElementById("message").style.display = "none";
  document.getElementById("content").style.display = "block";

  const part1 = "https://samply.app";
  const part2 = "/p/FheXiWum6aAK4IyyUX1h";
  document.getElementById("samply").src = part1 + part2;
} else {
  document.getElementById("message").innerText = "Access denied. Invalid or missing tag.";
}
