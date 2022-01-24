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

document.querySelectorAll(".snackbar-dismiss").forEach(dismiss => {
  dismiss.onclick = () => {
    let targetSnackBar = document.querySelector(dismiss.getAttribute("data-target"));
    targetSnackBar.style.display = "none"
  }
})

document.querySelectorAll(".show-snackbar").forEach((button, id) => {
  button.onclick = () => document.querySelectorAll(".snackbar")[id].style.display = "flex"
})

//Tabs Functionality 


document.querySelectorAll(".tabs-f .tab").forEach(tab => {
  tab.onclick = (e) => {
    let tabContainer = e.target.parentElement;
    let currentActiveTab = document.querySelector(tabContainer.getAttribute("data-active-tab"));
    let currentActiveBody = document.querySelector(currentActiveTab.getAttribute("data-toggle"));
    let targetTab = e.target;
    let targetBody = document.querySelector(targetTab.getAttribute("data-toggle"));

    currentActiveTab.classList.remove("active");
    targetTab.classList.add("active");
    tabContainer.setAttribute("data-active-tab", `#${targetTab.id}`)
    currentActiveBody.style.display = "none";
    targetBody.style.display = "block";
  }
})

document.querySelectorAll(".tabs-s .tab").forEach(tab => {
  tab.onclick = (e) => {
    let tabContainer = e.target.parentElement;
    let currentActiveTab = document.querySelector(tabContainer.getAttribute("data-active-tab"));
    let currentActiveBody = document.querySelector(currentActiveTab.getAttribute("data-toggle"));
    let targetTab = e.target;
    let targetBody = document.querySelector(targetTab.getAttribute("data-toggle"));

    currentActiveTab.classList.remove("active");
    targetTab.classList.add("active");
    tabContainer.setAttribute("data-active-tab", `#${targetTab.id}`)
    currentActiveBody.style.display = "none";
    targetBody.style.display = "block";
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


// Dialog Functionality

document.querySelectorAll(".show-dialog").forEach((button, id) => {
  button.onclick = () => {
    document.querySelectorAll(".dialog-block")[id].style.display = "flex";
    document.querySelector("body").style.overflow = "hidden"
  }
})


document.querySelectorAll(".dialog-block").forEach(block => {
  block.onclick = (e) => {
    if (e.target === block) block.style.display = "none";
    document.querySelector("body").style.overflow = ""
  }
})


window.onload = () => {
  addNewChip("Chip 1", document.querySelector(".chips-wrapper"));
  if (matchMedia("only screen and (max-width:600px)").matches) {
    document.querySelectorAll(".drawer").forEach(drawer => drawer.classList.add("hide-drawer"))
  }
}