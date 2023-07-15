let art_list = document.querySelector(".art_list");
// let plainText = document.getElementById("plainText")
// let Catalog_box = document.getElementById("Catalog_box")
let contentList = document.getElementById("content-list");
// let mainNav = document.querySelector(".main-nav")
let mainContent = document.querySelector(".main-content");
let modalContent = document.querySelector(".modal-content");

// plainText.addEventListener("click", function () {
//     // Catalog_box.style.display = "none"
//     contentList.style.width = "100%"
// })

let black = document.querySelector(".black");
let grey = document.querySelector(".grey");
let ash = document.querySelector(".ash");
let white = document.querySelector(".white");
let cardHead = document.querySelector(".card-head");
let headColor = document.querySelector(".head-color");
let headHighlighter = document.querySelector(".head-highlighter");
let highlightColor = document.querySelector(".highlight-color");
let audio = document.querySelector(".audio");
let pdf = document.querySelector(".pdf");
// let artListCardEn = document.querySelector(".art-list-card-en");
let artListCardMal = document.querySelector(".art-list-card-mal");
let zoomOut = document.querySelector(".fa-minus");
let zoomIn = document.querySelector(".fa-plus");
let artListHead = document.querySelector(".art-list-head");
let artListPara = document.querySelector(".art-list-para");
let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let cardBodySettingBtn = document.querySelectorAll(".card-body-setting-btns i");

artListCardMal.style.borderLeft = "none";

black.addEventListener("click", (event) => {
  cardHead.style.background = "#000000";
  cardHead.style.border = "1px solid #ffffff";

  headColor.style.color = "#ffffff";

  headHighlighter.style.color = "#ffffff";

  // artListCardEn.style.background = "#000000";
  // artListCardEn.style.borderRight = "3px solid #ffffff"

  artListCardMal.style.background = "#000000";
  // artListCardMal.style.borderLeft = "3px solid #ffffff"

  audio.style.background = "#ffffff";
  audio.style.color = "#000000";

  pdf.style.background = "#ffffff";
  pdf.style.color = "#000000";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#ffffff";
    content.style.color = "#000000";
  });

  document.body.style.background = "#000000";
  document.body.style.color = "#ffffff";
  //   mainNav.classList.add("white-border");
  modalContent.style.background = "#000000";

  black.classList.add("color-theme-active");

  grey.classList.remove("color-theme-active");

  ash.classList.remove("color-theme-active");

  white.classList.remove("color-theme-active");
});

grey.addEventListener("click", (event) => {
  cardHead.style.background = "#777777";
  cardHead.style.border = "1px solid #ffffff";

  headColor.style.color = "#ffffff";

  headHighlighter.style.color = "#ffffff";

  // artListCardEn.style.background = "#777777";
  // artListCardEn.style.borderLeft = "3px solid #ffffff"

  // artListCardMal.forEach(content => {
  artListCardMal.style.background = "#777777";
  //     content.style.borderLeft = "3px solid #ffffff"
  // })

  audio.style.background = "#ffffff";
  audio.style.color = "#000000";

  pdf.style.background = "#ffffff";
  pdf.style.color = "#000000";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#ffffff";
    content.style.color = "#000000";
  });

  document.body.style.background = "#777777";
  document.body.style.color = "#ffffff";
  //   mainNav.classList.add("white-border");
  modalContent.style.background = "#777777";

  black.classList.remove("color-theme-active");

  grey.classList.add("color-theme-active");

  ash.classList.remove("color-theme-active");

  white.classList.remove("color-theme-active");
});

ash.addEventListener("click", (event) => {
  cardHead.style.background = "#cccccc";
  cardHead.style.border = "1px solid #000000";

  headColor.style.color = "#000000";

  headHighlighter.style.color = "#000000";

  // artListCardEn.style.background = "#cccccc";
  // artListCardEn.style.borderLeft = "3px solid #000000"

  // artListCardMal.forEach(content => {
  content.style.background = "#cccccc";
  //     content.style.borderLeft = "3px solid #000000"
  // })

  audio.style.background = "#000000";
  audio.style.color = "#ffffff";

  pdf.style.background = "#000000";
  pdf.style.color = "#ffffff";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#000000";
    content.style.color = "#ffffff";
  });

  document.body.style.background = "#cccccc";
  document.body.style.color = "#000000";
  //   mainNav.classList.remove("white-border");
  modalContent.style.background = "#cccccc";

  black.classList.remove("color-theme-active");

  grey.classList.remove("color-theme-active");

  ash.classList.add("color-theme-active");

  white.classList.remove("color-theme-active");
});

white.addEventListener("click", (event) => {
  cardHead.style.background = "#ffffff";
  cardHead.style.border = "1px solid #000000";

  headColor.style.color = "#000000";

  headHighlighter.style.color = "#000000";

  // artListCardEn.style.background = "#ffffff";
  // artListCardEn.style.borderLeft = "3px solid #000000"

  // artListCardMal.forEach(content => {
  artListCardMal.style.background = "#ffffff";
  //     artListCardMal.style.borderLeft = "3px solid #000000"
  // })

  audio.style.background = "#000000";
  audio.style.color = "#ffffff";

  pdf.style.background = "#000000";
  pdf.style.color = "#ffffff";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#000000";
    content.style.color = "#ffffff";
  });

  document.body.style.background = "#ffffff";
  document.body.style.color = "#000000";
  //   mainNav.classList.remove("white-border");
  modalContent.style.background = "#ffffff";

  black.classList.remove("color-theme-active");

  grey.classList.remove("color-theme-active");

  ash.classList.remove("color-theme-active");

  white.classList.add("color-theme-active");
});

highlightColor.addEventListener("change", (event) => {
  let markColor = document.querySelectorAll(".highlight");
  if (highlightColor.value === "default") {
    markColor.forEach((content) => {
      content.style.background = "rgba(243, 255, 92, 0.8)";
    });
  }
  if (highlightColor.value === "red") {
    markColor.forEach((content) => {
      content.style.background = "red";
    });
  }
  if (highlightColor.value === "blue") {
    markColor.forEach((content) => {
      content.style.background = "blue";
    });
  }
});

var audioBtn = document.querySelector(".audio");
var audioBox = document.querySelector(".audioBox");
var closeMusic = document.querySelector(".closeMusic");
let audioMain = document.querySelector(".audio-main");
let seekBar = document.querySelector(".seek-bar");
let currentTime = document.querySelector(".current-time");
let audioDuration = document.querySelector(".audio-duration");
let playAudio = document.querySelector(".play-audio");
let pauseAudio = document.querySelector(".pause-audio");

audioBtn.addEventListener("click", (event) => {
  audioBox.style.display = "block";

  seekBar.value = 0;
  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = audioMain.duration;
    audioDuration.innerHTML = formateTime(audioMain.duration);
  }, 300);
  playAudio.addEventListener("click", (event) => {
    playAudio.style.display = "none";
    pauseAudio.style.display = "block";
    audioMain.play();
  });

  pauseAudio.addEventListener("click", (event) => {
    pauseAudio.style.display = "none";
    playAudio.style.display = "block";
    audioMain.pause();
  });
  setInterval(() => {
    seekBar.value = audioMain.currentTime;
    currentTime.innerHTML = formateTime(audioMain.currentTime);
  }, 500);

  seekBar.addEventListener("change", () => {
    audioMain.currentTime = seekBar.value;
  });
});

const formateTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min} : ${sec}`;
};

closeMusic.addEventListener("click", (event) => {
  audioBox.style.display = "none";
});

const setAudio = () => {
  seekBar.value = 0;
  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = audioMain.duration;
    audioDuration.innerHTML = audioMain.duration;
  }, 300);
};

const dropbtn = document.querySelector(".dropbtn");
let dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", (event) => {
  dropbtn.nextElementSibling.classList.toggle("show-down-btn");
  // dropdownContent.forEach(content => {
  //     content.classList.remove("show-down-btn")
  // })
  // if (dropdownContent[index].className.includes('show-down-btn')) {
  //     dropdownContent[index].classList.remove('show-down-btn')
  // }
  // else {
  //     dropdownContent[index].classList.add('show-down-btn')
  // }
});

let zoomContent = document.querySelector(".fa-expand");
let lightMode = document.querySelector(".fa-sun");
let darkMode = document.querySelector(".fa-moon");

zoomContent.addEventListener("click", (event) => {
  // contentList.classList.toggle("full-width")
  let zoomParent = zoomContent.parentElement;
  let zoomParentUp = zoomParent.parentElement;
  let zoomParentUpTwo = zoomParentUp.parentElement;

  if (
    (document.fullScreenElement !== undefined &&
      document.fullScreenElement === null) ||
    (document.msFullscreenElement !== undefined &&
      document.msFullscreenElement === null) ||
    (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
    (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
  ) {
    if (zoomParentUpTwo.requestFullScreen) {
      zoomParentUpTwo.requestFullScreen();
      zoomParentUpTwo.classList.add("full-width");
    } else if (zoomParentUpTwo.mozRequestFullScreen) {
      zoomParentUpTwo.mozRequestFullScreen();
      zoomParentUpTwo.classList.add("full-width");
    } else if (zoomParentUpTwo.webkitRequestFullScreen) {
      zoomParentUpTwo.webkitRequestFullScreen();
      zoomParentUpTwo.classList.add("full-width");
    } else if (elem.msRequestFullscreen) {
      zoomParentUpTwo.msRequestFullscreen();
      zoomParentUpTwo.classList.add("full-width");
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
      zoomParentUpTwo.classList.remove("full-width");
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      zoomParentUpTwo.classList.remove("full-width");
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
      zoomParentUpTwo.classList.remove("full-width");
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      zoomParentUpTwo.classList.remove("full-width");
    }
  }
});

lightMode.addEventListener("click", (event) => {
  lightMode.style.display = "none";

  darkMode.style.display = "block";

  cardHead.style.background = "#000000";
  cardHead.style.border = "1px solid #ffffff";

  headColor.style.color = "#ffffff";

  headHighlighter.style.color = "#ffffff";

  // artListCardEn.style.background = "#000000";
  // artListCardEn.style.borderLeft = "3px solid #ffffff"

  // artListCardMal.forEach(content => {
  artListCardMal.style.background = "#000000";
  //     artListCardMal.style.borderLeft = "3px solid #ffffff"
  // })

  audio.style.background = "#ffffff";
  audio.style.color = "#000000";

  pdf.style.background = "#ffffff";
  pdf.style.color = "#000000";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#ffffff";
    content.style.color = "#000000";
  });

  document.body.style.background = "#000000";
  document.body.style.color = "#ffffff";
  //   mainNav.classList.add("white-border");
  modalContent.style.background = "#000000";
});

darkMode.addEventListener("click", (event) => {
  darkMode.style.display = "none";

  lightMode.style.display = "block";

  cardHead.style.background = "#ffffff";
  cardHead.style.border = "1px solid #000000";

  headColor.style.color = "#000000";

  headHighlighter.style.color = "#000000";

  // artListCardEn.style.background = "#ffffff";
  // artListCardEn.style.borderLeft = "3px solid #000000"

  // artListCardMal.forEach(content => {
  artListCardMal.style.background = "#ffffff";
  //     artListCardMal.style.borderLeft = "3px solid #000000"
  // })

  audio.style.background = "#000000";
  audio.style.color = "#ffffff";

  pdf.style.background = "#000000";
  pdf.style.color = "#ffffff";

  cardBodySettingBtn.forEach((content) => {
    content.style.background = "#000000";
    content.style.color = "#ffffff";
  });

  document.body.style.background = "#ffffff";
  document.body.style.color = "#000000";
  //   mainNav.classList.remove("white-border");
  modalContent.style.background = "#ffffff";
});

zoomOut.addEventListener("click", (event) => {
  style = window
    .getComputedStyle(artListHead, null)
    .getPropertyValue("font-size");
  currentSize = parseFloat(style);

  style = window
    .getComputedStyle(artListPara, null)
    .getPropertyValue("font-size");
  currentSize = parseFloat(style);
  artListPara.style.fontSize = currentSize - 1 + "px";
});

zoomIn.addEventListener("click", (event) => {
  style = window
    .getComputedStyle(artListHead, null)
    .getPropertyValue("font-size");
  currentSize = parseFloat(style);
  artListHead.style.fontSize = currentSize + 1 + "px";

  style = window
    .getComputedStyle(artListPara, null)
    .getPropertyValue("font-size");
  currentSize = parseFloat(style);
  artListPara.style.fontSize = currentSize + 1 + "px";
});

searchBtn.addEventListener("click", (event) => {
  let searchValue = searchBtn.previousElementSibling.value.toUpperCase();
  let searchBlock = searchBtn.parentElement;
  let blockArtListPara = searchBlock.nextElementSibling;
  let searchList = blockArtListPara.querySelectorAll("span");

  if (searchValue === "") {
    // let regExp = new RegExp(searchValue, "gi")
    // blockArtListPara.innerHTML = (blockArtListPara.textContent).replace(regExp, `<mark class="markColor">$&</mark>`)

    searchList.forEach((p) => {
      p.innerHTML = p.textContent;
    });

    return;
  }

  searchList.forEach((p) => {
    let txtValue = p.textContent;

    if (txtValue.toUpperCase().indexOf(searchValue) > -1) {
      txtValue = txtValue.replace(
        new RegExp(searchValue, "gi"),
        `<span class="highlight">$&</span>`
      );
      p.innerHTML = txtValue;
    } else {
      p.innerHTML = txtValue;
    }
  });

  highlightColor.value = "default";
});
