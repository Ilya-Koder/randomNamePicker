const addButton = document.querySelector("#addButton");
const pickWinnerButton = document.querySelector("#pickWinnerButton");
const participantList = document.querySelector("#participantList");
const nameInput = document.querySelector("#nameInput");
const winnerDisplay = document.querySelector("#winner");

let participants = [];

function addParticipant() {
  const name = nameInput.value.trim();
  if (name !== "") {
    participants.push(name);
    updateParticipantList();
    nameInput.value = "";

    pickWinnerButton.style.display = "inline-block";
  } else {
    alert("Please enter a name!");
  }
}

function updateParticipantList() {
  participantList.innerHTML = "";
  participants.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = name;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => removeParticipant(index));

    li.appendChild(removeButton);
    participantList.appendChild(li);
  });
}

function removeParticipant(index) {
  participants.splice(index, 1);
  updateParticipantList();

  if (participants.length === 0) {
    pickWinnerButton.style.display = "none";
  }
}

function pickWinner() {
  if (participants.length === 0) {
    alert("No participants to pick from!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[randomIndex];

  pickWinnerButton.style.backgroundColor = "#4CAF50";

  winnerDisplay.textContent = `The winner is: ${winner}`;
}

function resetButtonBackground() {
  pickWinnerButton.style.backgroundColor = "";
}

window.addEventListener("load", resetButtonBackground);

addButton.addEventListener("click", addParticipant);
pickWinnerButton.addEventListener("click", pickWinner);
