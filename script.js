const form = document.getElementById("gameForm");
const recordsDiv = document.getElementById("records");

let players = [];
let games = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  players = [
    document.getElementById("p1").value,
    document.getElementById("p2").value,
    document.getElementById("p3").value,
    document.getElementById("p4").value
  ];

  localStorage.setItem("players", JSON.stringify(players));
  renderRecords();
});

function renderRecords() {
  recordsDiv.innerHTML = "";
  if (players.length > 0) {
    recordsDiv.innerHTML += `<p>참석자: ${players.join(", ")}</p>`;
  }
  if (games.length > 0) {
    games.forEach((g, i) => {
      recordsDiv.innerHTML += `<p>게임 ${i+1}: ${g}</p>`;
    });
  }
}

// 저장된 데이터 불러오기
if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
  renderRecords();
}