// Simulated check — always allow for now
const validAccess = true;

if (validAccess) {
  document.getElementById("message").style.display = "none";
  document.getElementById("content").style.display = "block";

  // Obfuscated Samply link
  const part1 = "https://samply.app";
  const part2 = "/p/FheXiWum6aAK4IyyUX1h";

  // Load into iframe
  document.getElementById("samply").src = part1 + part2;
} else {
  document.getElementById("message").innerText = "Access denied. Invalid tag.";
}
