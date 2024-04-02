$(document).ready(function () {
  // 스위치 토글 이벤트 설정
  $(".switch-toggle").change(function () {
    var $messageContent = $(this)
      .closest(".bot-message")
      .find(".message-content");
    if (this.checked) {
      $messageContent.addClass("dark-mode");
    } else {
      $messageContent.removeClass("dark-mode");
    }
  });

  // 서브 메뉴 토글 이벤트 설정
  $("#toggleSubMenu").click(function () {
    $(".hide_menu").toggle();
    $(".container").toggleClass("sub-menu-open");

    if ($(".hide_menu").css("display") === "none") {
      $(".container").css("margin-left", "180px");
    } else {
      $(".container").css("margin-left", "320px");
    }
  });

  // 수집 버튼 클릭 이벤트 설정
  $("#collectButton").click(function () {
    var botMessages = document.querySelectorAll(".bot-message");
    var collectMessages = document.querySelectorAll(".collect_message");

    botMessages.forEach(function (message) {
      message.style.display = "none";
      collectButton.style.display = "none";
    });

    collectMessages.forEach(function (message) {
      message.style.display = "flex";
    });
  });

  $(".main_title").click(function () {
    $(this).children(".sub-title").slideToggle();
    $(this).find(".arrow").toggleClass("rotate");
  });

  $(".nav_fold_btn").click(function () {
    $("body").toggleClass("nav_fold");
  });

  $(".setting").hover(
    function () {
      $(this).next(".tooltip").show();
    },
    function () {
      $(this).next(".tooltip").hide();
    }
  );
});

// 동적 최대 높이 설정
window.onload = function () {
  setDynamicMaxHeight();
};

function setDynamicMaxHeight() {
  var windowHeight = window.innerHeight;
  var containerHeight = windowHeight - 10;

  var messageContents = document.querySelectorAll(".message-content");

  messageContents.forEach(function (content) {
    content.style.maxHeight = containerHeight + "px";
  });
}

// 다크 모드 토글
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("conversation").style.display = "none";
