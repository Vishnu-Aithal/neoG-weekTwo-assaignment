//Chips Functionality

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

//Drawer Functionality

const drawerListItems = document.querySelectorAll(".drawer-list-item");
let activeItem;
drawerListItems.forEach(
  (item) =>
    (item.onclick = () => {
      if (activeItem) activeItem.classList.remove("selected");
      item.classList.add("selected");
      activeItem = item;
    })
);

let mainDrawerCollapse = document.querySelector(".main-drawer-collapse");
mainDrawerCollapse.onclick = () => {
  let mainList = document.querySelector(".drawer-list-main");
  mainList.classList.toggle("collapsed");
  mainList.classList.contains("collapsed")
    ? (mainDrawerCollapse.innerHTML = `<i class="fas fa-angle-down fa-2x"></i>`)
    : (mainDrawerCollapse.innerHTML = `<i class="fas fa-angle-up fa-2x"></i>`);
};

document.querySelectorAll(".drawer-head-sub").forEach(
  (subList) =>
    (subList.onclick = (e) => {
      let currentSubDrawerList = e.target.parentElement.children[1];
      let currentArrowIcon = e.target.children[2];
      currentSubDrawerList.classList.toggle("collapsed");
      currentSubDrawerList.classList.contains("collapsed")
        ? (currentArrowIcon.innerHTML = `<i class="fas fa-angle-right fa-lg"></i>`)
        : (currentArrowIcon.innerHTML = `<i class="fas fa-angle-up fa-lg"></i>`);
    })
);
