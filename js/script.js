$(document).ready(function () {
  // 스위치 토글 이벤트 설정
  // $(".switch-toggle").change(function () {
  //   var $messageContent = $(this)
  //     .closest(".bot-message")
  //     .find(".message-content");
  //   if (this.checked) {
  //     $messageContent.addClass("dark-mode");
  //   } else {
  //     $messageContent.removeClass("dark-mode");
  //   }
  // });

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
    $(".bot-message").hide();
    $("#collectButton").hide();
    $(".collect_message").show();
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
$(window).on("load", function () {
  setDynamicMaxHeight();
});

function setDynamicMaxHeight() {
  var windowHeight = $(window).height();
  var containerHeight = windowHeight - 10;

  $(".message-content").css("max-height", containerHeight + "px");
}

// 다크 모드 토글
function toggleDarkMode() {
  $("body").toggleClass("dark-mode");
}

function openTab(evt, tabName) {
  $(".tabcontent").hide();
  $(".tablinks").removeClass("active");
  $("#" + tabName).show();
  $(evt.currentTarget).addClass("active");
}
$("#conversation").hide();

function openTab(evt, tabName) {
  $(".tabcontent").hide();
  $(".tablinks").removeClass("active");
  $("#" + tabName).show();
  $(evt.currentTarget).addClass("active");
}
$("#skeleton-conversation").hide();

$(document).ready(function () {
  $("#add-tag").click(addTag);

  $("#hashtag").keypress(function (e) {
    if (e.which == 13) {
      addTag();
      e.preventDefault();
    }
  });

  function addTag() {
    var hashtagText = $("#hashtag").val().trim();
    if (hashtagText !== "") {
      hashtagText = "#" + hashtagText;
      var tagButton = $("<button>").addClass("tag-button").text(hashtagText);
      $("#hashtag").before(tagButton);
      $("#hashtag").val("");
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var editTooltipItem = document.querySelector(".edit");

  var modal = document.getElementById("modal");
  var modalOverlay = document.querySelector(".modal-overlay");

  function openModal() {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }

  editTooltipItem.addEventListener("click", openModal);

  modalOverlay.addEventListener("click", closeModal);
});

document.addEventListener("DOMContentLoaded", function () {
  var chatList = document.querySelector(".popup");
  var popBody = document.getElementById("chat-modal_body");
  var closePopup = document.getElementById("closePopup");

  chatList.addEventListener("click", function () {
    popBody.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    popBody.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popBody) {
      popBody.style.display = "none";
    }
  });
});
const selectItem = document.querySelectorAll(".skeleton_wrapper");
const hideItem = () => {
  selectItem.forEach((element) => {
    $(element).fadeOut();
  });
};

$(window).on("load", function () {
  setTimeout(hideItem, 2000);
});
