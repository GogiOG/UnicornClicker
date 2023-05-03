// Nastavimo števec na 0
var counter = 0;

// Najdemo elemente DOM-a
var unicorn = document.getElementById("unicorn");
var clicksText = document.getElementById("clicks");

// Seznam pastelnih barv
var colors = ["#F5CB5C", "#FFA07A", "#9370DB", "#87CEFA", "#90EE90", "#C8A2C8"];

// Števec za izbiro barve
var colorIndex = 0;

// Dodamo dogodek za klik na element "unicorn"
unicorn.addEventListener("click", function() {
  // Povečamo števec za 1
  counter += 1;

  // Posodobimo tekstovni prikaz števca in nastavimo barvo
  clicksText.innerHTML = counter;
  clicksText.style.color = colors[colorIndex];

  // Povečamo števec za izbiro barve in preverimo, če smo dosegli konec seznama
  colorIndex += 1;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }

  // Dodamo razred "clicked" k elementu "unicorn" za animacijski efekt
  unicorn.classList.add("clicked");

  // Počakamo 0.5 sekunde, da se animacija izvede, nato odstranimo razred "clicked"
  setTimeout(function() {
    unicorn.classList.remove("clicked");
  }, 500);
});
let level = 1; // začetna stopnja
let score = 0; // začetni rezultat
let scoreNeeded = 10; // število točk, ki so potrebne za prehod na naslednjo stopnjo

// funkcija, ki se kliče ob kliku na unicorn
function unicornClick() {
  score++; // povečaj število točk za 1
  document.getElementById("score").innerHTML = score; // posodobi prikaz točk
  // preveri, ali je igralec dosegu potrebno število točk za napredovanje na naslednjo stopnjo
  if (score >= scoreNeeded) {
    level++; // povečaj stopnjo
    scoreNeeded *= 2; // povečaj število točk, ki so potrebne za prehod na naslednjo stopnjo
    document.getElementById("level").innerHTML = level; // posodobi prikaz stopnje
    // izberi naključno nagrado za igralca, glede na trenutno stopnjo
    let reward = rewards[level - 1][Math.floor(Math.random() * rewards[level - 1].length)];
    // prikaži nagrado
    alert("Čestitke, prešli ste na stopnjo " + level + " in dobili nagrado: " + reward);
  }
}

// nagrade za vsako stopnjo
let rewards = [
  ["zvonec", "balon"],
  ["meč", "zlato"],
  ["krona", "čarobna palica"],
  ["zmaj", "diamanti"]
];


