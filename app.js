//Chips Functionality

const addNewChip = function (text, chipsWrapper) {
  let newChip = document.createElement("div");
  newChip.classList.add("chip");
  if (chipsWrapper.parentElement.activeIcon) {
    let newChipIcon = chipsWrapper.parentElement.activeIcon.cloneNode(true);
    newChipIcon.classList.add("chip-left-icon");
    newChip.appendChild(newChipIcon)
  }
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

document.querySelectorAll(".input-new-chip").forEach(newChipInput => {
  newChipInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let inputText = event.target.value;
      let targetChipsWrapperId = newChipInput.getAttribute("data-input-target");
      let targetChipsWrapperElement = document.querySelector(targetChipsWrapperId)

      addNewChip(inputText, targetChipsWrapperElement);
      event.target.value = "";
    }
  })
})


document.querySelectorAll(".chip-icon").forEach(currentChipIcon => {
  currentChipIcon.onclick = () => {
    let targetChipsContainer = document.querySelector(currentChipIcon.parentElement.getAttribute("data-chip-target"));
    if (targetChipsContainer.activeIcon) targetChipsContainer.activeIcon.classList.remove("active");
    if (targetChipsContainer.activeIcon === currentChipIcon) {
      currentChipIcon.classList.remove("active");
      targetChipsContainer.activeIcon = null;
    } else {
      currentChipIcon.classList.add("active");
      targetChipsContainer.activeIcon = currentChipIcon;
    }
  }
})


window.onload = () => addNewChip("Chip 1", document.querySelector(".chips-wrapper")); //demo

//Drawer Functionality

const drawerListItems = document.querySelectorAll(".drawer-list-item");
drawerListItems.forEach(
  (item) =>
  (item.onclick = () => {
    let drawer = document.querySelector(item.getAttribute("data-parent-drawer"));
    if (drawer.activeItem) drawer.activeItem.classList.remove("selected");
    item.classList.add("selected");
    drawer.activeItem = item;
  })
);

document.querySelectorAll(".main-drawer-collapse").forEach(mainDrawerCollapse => {
  mainDrawerCollapse.onclick = () => {
    let drawer = document.querySelector(mainDrawerCollapse.getAttribute("data-target-drawer"));
    drawer.classList.toggle("hide-drawer");
  }
})

document.querySelectorAll(".drawer-head-sub").forEach(
  (subList) =>
  (subList.onclick = (e) => {
    let currentSubDrawerList = document.querySelector(subList.getAttribute("data-target-drawer-list"))
    let currentArrowIcon = e.target.children[2];
    currentSubDrawerList.classList.toggle("collapsed");
    currentSubDrawerList.classList.contains("collapsed") ?
      (currentArrowIcon.innerHTML = `<i class="fas fa-angle-right fa-lg"></i>`) :
      (currentArrowIcon.innerHTML = `<i class="fas fa-angle-up fa-lg"></i>`);
  })
);

//Badge Toggle Functionality

const badgeToggleBtn = document.querySelector(".btn-badge-toggle");
badgeToggleBtn.onclick = (e) => {
  e.target.parentElement.children[1].classList.toggle("btn-badge-hide");
};

//SnackBar Functionality

const showSnackbar = document.querySelector(".show-snackbar");
const snackbar = document.querySelector(".snackbar")
const snackbarDismiss = document.querySelector(".snackbar-dismiss");
const snackbarAction = document.querySelector(".snackbar-action")
showSnackbar.onclick = () => snackbar.style.display = "flex";
snackbarDismiss.onclick = () => snackbar.style.display = "none";
snackbarAction.onclick = () => location.reload();

//Tabs Functionality 

let activeTab;
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.onclick = (e) => {
    let currentTab = e.target
    if (activeTab) activeTab.classList.remove("active")
    currentTab.classList.add("active");
    activeTab = currentTab;
  }
})

//Header Short Functionality 

document.querySelector(".header-short-container").addEventListener("scroll", (e) => {
  let header = e.target.children[0];
  if (e.target.scrollTop > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
})