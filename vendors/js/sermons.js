let art_list = document.querySelector(".art_list");
let contentList = document.getElementById("content-list");
let mainContent = document.querySelector(".main-content");
let modalContent = document.querySelector(".modal-content");

let black = document.querySelectorAll(".black");
let grey = document.querySelectorAll(".grey");
let ash = document.querySelectorAll(".ash");
let white = document.querySelectorAll(".white");
let cardHead = document.querySelectorAll(".card-head");
let headColor = document.querySelectorAll(".head-color");
let headHighlighter = document.querySelectorAll(".head-highlighter");
let highlightColor = document.querySelectorAll(".highlight-color");
let audio = document.querySelectorAll(".audio");
let pdf = document.querySelectorAll(".pdf");
let artListCardEn = document.querySelectorAll(".art-list-card-en");
let artListCardMal = document.querySelectorAll(".art-list-card-mal");
let zoomOut = document.querySelectorAll(".fa-minus");
let zoomIn = document.querySelectorAll(".fa-plus");
let artListHead = document.querySelectorAll(".art-list-head");
let artListPara = document.querySelectorAll(".art-list-para");
let searchInput = document.querySelectorAll(".search-input");
let searchBtn = document.querySelectorAll(".search-btn");
let cardBodySettingBtn = document.querySelectorAll(".card-body-setting-btns i");
let para1 = document.querySelectorAll(".para1");
let para2 = document.querySelectorAll(".para2");
let para3 = document.querySelectorAll(".para3");
let para4 = document.querySelectorAll(".para4");
let para5 = document.querySelectorAll(".para5");
let para6 = document.querySelectorAll(".para6");
let para7 = document.querySelectorAll(".para7");
let para8 = document.querySelectorAll(".para8");
let para9 = document.querySelectorAll(".para9");
let para10 = document.querySelectorAll(".para10");
let para11 = document.querySelectorAll(".para11");

//to align para's of both side para1
if (para1[0].clientHeight >= para1[1].clientHeight) {
  para1[1].style.height = para1[0].clientHeight + "px";
} else {
  para1[0].style.height = para1[1].clientHeight + "px";
}

//to align para's of both side para2
if (para2[0].clientHeight >= para2[1].clientHeight) {
  para2[1].style.height = para2[0].clientHeight + "px";
} else {
  para2[0].style.height = para2[1].clientHeight + "px";
}

//to align para's of both side para3
if (para3[0].clientHeight >= para3[1].clientHeight) {
  para3[1].style.height = para3[0].clientHeight + "px";
} else {
  para3[0].style.height = para3[1].clientHeight + "px";
}

//to align para's of both side para4
if (para4[0].clientHeight >= para4[1].clientHeight) {
  para4[1].style.height = para4[0].clientHeight + "px";
} else {
  para4[0].style.height = para4[1].clientHeight + "px";
}

//to align para's of both side para5
if (para5[0].clientHeight >= para5[1].clientHeight) {
  para5[1].style.height = para5[0].clientHeight + "px";
} else {
  para5[0].style.height = para5[1].clientHeight + "px";
}

//to align para's of both side para6
if (para6[0].clientHeight >= para6[1].clientHeight) {
  para6[1].style.height = para6[0].clientHeight + "px";
} else {
  para6[0].style.height = para6[1].clientHeight + "px";
}

//to align para's of both side para7
if (para7[0].clientHeight >= para7[1].clientHeight) {
  para7[1].style.height = para7[0].clientHeight + "px";
} else {
  para7[0].style.height = para7[1].clientHeight + "px";
}

//to align para's of both side para8
if (para8[0].clientHeight >= para8[1].clientHeight) {
  para8[1].style.height = para8[0].clientHeight + "px";
} else {
  para8[0].style.height = para8[1].clientHeight + "px";
}

//to align para's of both side para9
if (para9[0].clientHeight >= para9[1].clientHeight) {
  para9[1].style.height = para9[0].clientHeight + "px";
} else {
  para9[0].style.height = para9[1].clientHeight + "px";
}

//to align para's of both side para10
if (para10[0].clientHeight >= para10[1].clientHeight) {
  para10[1].style.height = para10[0].clientHeight + "px";
} else {
  para10[0].style.height = para10[1].clientHeight + "px";
}

//to align para's of both side para11
if (para11[0].clientHeight >= para11[1].clientHeight) {
  para11[1].style.height = para11[0].clientHeight + "px";
} else {
  para11[0].style.height = para11[1].clientHeight + "px";
}

black.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    cardHead.forEach((content) => {
      content.style.background = "#000000";
      content.style.border = "1px solid #ffffff";
    });
    headColor.forEach((content) => {
      content.style.color = "#ffffff";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#ffffff";
    });
    artListCardEn.forEach((content) => {
      content.style.background = "#000000";
      content.style.borderRight = "2px solid #ffffff";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#000000";
      content.style.borderLeft = "2px solid #ffffff";
    });

    audio.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    pdf.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
    //   mainNav.classList.add("white-border");
    modalContent.style.background = "#000000";

    black.forEach((content) => {
      content.classList.add("color-theme-active");
    });
    grey.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    ash.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    white.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
  });
});

grey.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    cardHead.forEach((content) => {
      content.style.background = "#777777";
      content.style.border = "1px solid #ffffff";
    });
    headColor.forEach((content) => {
      content.style.color = "#ffffff";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#ffffff";
    });

    artListCardEn.forEach((content) => {
      content.style.background = "#777777";
      content.style.borderRight = "2px solid #ffffff";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#777777";
      content.style.borderLeft = "2px solid #ffffff";
    });

    audio.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    pdf.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    document.body.style.background = "#777777";
    document.body.style.color = "#ffffff";
    //   mainNav.classList.add("white-border");
    modalContent.style.background = "#777777";

    black.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    grey.forEach((content) => {
      content.classList.add("color-theme-active");
    });
    ash.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    white.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
  });
});

ash.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    cardHead.forEach((content) => {
      content.style.background = "#cccccc";
      content.style.border = "1px solid #000000";
    });
    headColor.forEach((content) => {
      content.style.color = "#000000";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#000000";
    });

    artListCardEn.forEach((content) => {
      content.style.background = "#cccccc";
      content.style.borderRight = "2px solid #000000";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#cccccc";
      content.style.borderLeft = "2px solid #000000";
    });

    audio.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    pdf.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    document.body.style.background = "#cccccc";
    document.body.style.color = "#000000";
    //   mainNav.classList.remove("white-border");
    modalContent.style.background = "#cccccc";

    black.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    grey.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    ash.forEach((content) => {
      content.classList.add("color-theme-active");
    });
    white.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
  });
});

white.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    cardHead.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.border = "1px solid #000000";
    });
    headColor.forEach((content) => {
      content.style.color = "#000000";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#000000";
    });

    artListCardEn.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.borderRight = "2px solid #000000";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.borderLeft = "2px solid #000000";
    });

    audio.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    pdf.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
    //   mainNav.classList.remove("white-border");
    modalContent.style.background = "#ffffff";

    black.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    grey.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    ash.forEach((content) => {
      content.classList.remove("color-theme-active");
    });
    white.forEach((content) => {
      content.classList.add("color-theme-active");
    });
  });
});

highlightColor.forEach((tab) => {
  tab.addEventListener("change", (event) => {
    let markColor = document.querySelectorAll(".highlight");
    if (tab.value === "default") {
      markColor.forEach((content) => {
        content.style.background = "rgba(243, 255, 92, 0.8)";
      });
    }
    if (tab.value === "red") {
      markColor.forEach((content) => {
        content.style.background = "red";
      });
    }
    if (tab.value === "blue") {
      markColor.forEach((content) => {
        content.style.background = "blue";
      });
    }
  });
});

var audioBtn = document.querySelectorAll(".audio");
var audioBox = document.querySelector(".audioBox");
var closeMusic = document.querySelector(".closeMusic");
let audioMain = document.querySelectorAll(".audio-main");
let seekBar = document.querySelector(".seek-bar");
let currentTime = document.querySelector(".current-time");
let audioDuration = document.querySelector(".audio-duration");
let playAudio = document.querySelector(".play-audio");
let pauseAudio = document.querySelector(".pause-audio");

audioBtn.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    audioBox.style.display = "block";
    audioMain.forEach((content) => {
      seekBar.value = 0;
      currentTime.innerHTML = "00:00";
      setTimeout(() => {
        seekBar.max = content.duration;
        audioDuration.innerHTML = formateTime(content.duration);
      }, 300);
      playAudio.addEventListener("click", (event) => {
        playAudio.style.display = "none";
        pauseAudio.style.display = "block";
        content.play();
      });

      pauseAudio.addEventListener("click", (event) => {
        pauseAudio.style.display = "none";
        playAudio.style.display = "block";
        content.pause();
      });
      setInterval(() => {
        seekBar.value = content.currentTime;
        currentTime.innerHTML = formateTime(content.currentTime);
      }, 500);

      seekBar.addEventListener("change", () => {
        content.currentTime = seekBar.value;
      });
    });
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

const dropbtn = document.querySelectorAll(".dropbtn");
let dropdownContent = document.querySelectorAll(".dropdown-content");

dropbtn.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    tab.nextElementSibling.classList.toggle("show-down-btn");
  });
});

let zoomContent = document.querySelectorAll(".fa-expand");
let lightMode = document.querySelectorAll(".fa-sun");
let darkMode = document.querySelectorAll(".fa-moon");

zoomContent.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    let zoomParent = tab.parentElement;
    let zoomParentUp = zoomParent.parentElement;
    let zoomParentUpTwo = zoomParentUp.parentElement;

    if (
      (document.fullScreenElement !== undefined &&
        document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined &&
        document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined &&
        !document.webkitIsFullScreen)
    ) {
      if (zoomParentUpTwo.requestFullScreen) {
        zoomParentUpTwo.requestFullScreen();
        zoomParentUpTwo.classList.add("full-width");
        audioBox.requestFullScreen();
      } else if (zoomParentUpTwo.mozRequestFullScreen) {
        zoomParentUpTwo.mozRequestFullScreen();
        zoomParentUpTwo.classList.add("full-width");
        audioBox.requestFullScreen();
      } else if (zoomParentUpTwo.webkitRequestFullScreen) {
        zoomParentUpTwo.webkitRequestFullScreen();
        zoomParentUpTwo.classList.add("full-width");
        audioBox.requestFullScreen();
      } else if (elem.msRequestFullscreen) {
        zoomParentUpTwo.msRequestFullscreen();
        zoomParentUpTwo.classList.add("full-width");
        audioBox.requestFullScreen();
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
});

lightMode.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    lightMode.forEach((content) => {
      content.style.display = "none";
    });
    darkMode.forEach((content) => {
      content.style.display = "block";
    });

    cardHead.forEach((content) => {
      content.style.background = "#000000";
      content.style.border = "1px solid #ffffff";
    });
    headColor.forEach((content) => {
      content.style.color = "#ffffff";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#ffffff";
    });

    artListCardEn.forEach((content) => {
      content.style.background = "#000000";
      content.style.borderRight = "2px solid #ffffff";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#000000";
      content.style.borderLeft = "2px solid #ffffff";
    });

    audio.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    pdf.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.color = "#000000";
    });
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
    modalContent.style.background = "#000000";
  });
});

darkMode.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    darkMode.forEach((content) => {
      content.style.display = "none";
    });
    lightMode.forEach((content) => {
      content.style.display = "block";
    });

    cardHead.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.border = "1px solid #000000";
    });
    headColor.forEach((content) => {
      content.style.color = "#000000";
    });
    headHighlighter.forEach((content) => {
      content.style.color = "#000000";
    });

    artListCardEn.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.borderRight = "2px solid #000000";
    });
    artListCardMal.forEach((content) => {
      content.style.background = "#ffffff";
      content.style.borderLeft = "2px solid #000000";
    });

    audio.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    pdf.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    cardBodySettingBtn.forEach((content) => {
      content.style.background = "#000000";
      content.style.color = "#ffffff";
    });
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
    modalContent.style.background = "#ffffff";
  });
});

zoomOut.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    artListHead.forEach((content) => {
      style = window
        .getComputedStyle(content, null)
        .getPropertyValue("font-size");
      currentSize = parseFloat(style);
      content.style.fontSize = currentSize - 1 + "px";
    });
    artListPara.forEach((content) => {
      style = window
        .getComputedStyle(content, null)
        .getPropertyValue("font-size");
      currentSize = parseFloat(style);
      content.style.fontSize = currentSize - 1 + "px";
    });
  });
});

zoomIn.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    artListHead.forEach((content) => {
      style = window
        .getComputedStyle(content, null)
        .getPropertyValue("font-size");
      currentSize = parseFloat(style);
      content.style.fontSize = currentSize + 1 + "px";
    });
    artListPara.forEach((content) => {
      style = window
        .getComputedStyle(content, null)
        .getPropertyValue("font-size");
      currentSize = parseFloat(style);
      content.style.fontSize = currentSize + 1 + "px";
    });
  });
});

searchBtn.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    let searchValue = tab.previousElementSibling.value.toUpperCase();
    let searchBlock = tab.parentElement;
    let blockArtListPara = searchBlock.nextElementSibling;
    let searchList = blockArtListPara.querySelectorAll("span");

    if (searchValue === "") {
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

    highlightColor.forEach((tab) => {
      tab.value = "default";
    });
  });
});
