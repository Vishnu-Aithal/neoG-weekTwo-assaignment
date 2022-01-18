const addNewChip = function (text) {
  let chipsWrapper = document.querySelector(".chips-wrapper");
  let newChip = document.createElement("div");
  newChip.classList.add("chip");
  let newChipText = document.createElement("div");
  newChipText.classList.add("chip-text");
  newChipText.innerText = text;
  newChipDismiss = document.createElement("div");
  newChipDismiss.classList.add("chip-dismiss");
  newChipDismiss.innerHTML = `<i class="fas fa-times-circle"></i>`;
  newChipDismiss.addEventListener("click", () => newChip.remove());
  newChip.appendChild(newChipText);
  newChip.appendChild(newChipDismiss);
  chipsWrapper.appendChild(newChip);
};

const newChipInput = document.querySelector(".input-new-chip");
newChipInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addNewChip(event.target.value);
    event.target.value = "";
  }
});

window.onload = () => addNewChip("Chip 1");
