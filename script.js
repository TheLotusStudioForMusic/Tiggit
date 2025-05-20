// Simulate simple validation
const validAccess = true; // or use a query string check like ?access=1

if (validAccess) {
  document.getElementById("message").style.display = "none";
  document.getElementById("content").style.display = "block";

  // Obfuscate link parts
  const part1 = "https://samply.app";
  const part2 = "/p/FheXiWum6aAK4IyyUX1h";

  // Set audio player src
  const audio = document.querySelector("audio");
  audio.src = part1 + part2;
} else {
  document.getElementById("message").innerText = "Access denied. Invalid tag.";
}
