var modal = document.getElementById("Modal");
var icon = document.querySelector(".settings-icon");
var span = document.getElementsByClassName("close")[0];
$(document).ready(function() {
  $('.switch-toggle').change(function() {
    var $messageContent = $(this).closest('.bot-message').find('.message-content');
    if (this.checked) {
      $messageContent.addClass('dark-mode');
    } else {
      $messageContent.removeClass('dark-mode');
    }
  });
});

icon.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function() {
  $("#toggleSubMenu").click(function() {
    $(".hide_menu").toggle();
    
    $(".container").toggleClass("sub-menu-open");
    
    if ($(".hide_menu").css("display") === "none") {
      $(".container").css("margin-left", "70px");
    } else {
      $(".container").css("margin-left", "320px");
    }
  });

  $(".left.side-menu .hashtag").click(function() {
    $(".left_sub_menu").show();
    $(".left_sub_menu_2").hide();
  });

  $(".left.side-menu .comment").click(function() {
    $(".left_sub_menu_2").show();
    $(".left_sub_menu").hide();
  });
});
document.getElementById("collectButton").addEventListener("click", function() {
  var botMessages = document.querySelectorAll(".bot-message");
  var collectMessages = document.querySelectorAll(".collect_message");

  botMessages.forEach(function(message) {
    message.style.display = "none";
    collectButton.style.display = "none";
  });

  collectMessages.forEach(function(message) {
    message.style.display = "flex"; 
  });
});
window.onload = function() {
  setDynamicMaxHeight();
};

function setDynamicMaxHeight() {
  var windowHeight = window.innerHeight;
  var containerHeight = windowHeight - 100; 

  var messageContents = document.querySelectorAll('.message-content'); 

  messageContents.forEach(function(content) {
    content.style.maxHeight = containerHeight + 'px';
  });
}

$(document).ready(function() {
  $('.main_title').click(function() {
    $(this).children('.sub-title').slideToggle();
    $(this).find('.arrow').toggleClass('rotate');
  });
});

function enableEdit() {
  var editableHeading = document.querySelector('.editable-heading');
  var editButton = editableHeading.querySelector('.edit-button');
  var saveButton = editableHeading.querySelector('.save-button');
  var headingText = editableHeading.querySelector('span');
  var headingInput = editableHeading.querySelector('input[type="text"]');
  var hashTagForm = document.querySelector('.hash-tag-form');

  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';
  headingText.style.display = 'none';
  headingInput.style.display = 'inline-block';
  hashTagForm.style.display = 'block';
  headingInput.readOnly = false;
  headingInput.focus(); 
  hashTagForm.style.display = 'block';
}

function saveEdit() {
  var editableHeading = document.querySelector('.editable-heading');
  var editButton = editableHeading.querySelector('.edit-button');
  var saveButton = editableHeading.querySelector('.save-button');
  var headingText = editableHeading.querySelector('span');
  var headingInput = editableHeading.querySelector('input[type="text"]');
  var hashTagForm = document.querySelector('.hash-tag-form');

  editButton.style.display = 'inline-block';
  saveButton.style.display = 'none';
  headingText.style.display = 'inline-block';
  headingInput.style.display = 'none';
  hashTagForm.style.display = 'none'; 
}

function handleKeyPress(event) {
  const keyCode = event.keyCode || event.which;
  if (keyCode === 13) {
      event.preventDefault();
      createHashTagButton(event.target.value);
      event.target.value = ''; 
  }
}

function createHashTagButton(text) {
  const hashTagForm = document.querySelector('.hash-tag-form');
  const hashTagList = document.createElement('div');
  hashTagList.className = 'hash-tag-list';

  const hashTagButton = document.createElement('button');
  hashTagButton.innerText = '#' + text;

  const deleteButton = document.createElement('span');
  deleteButton.innerText = 'x';
  deleteButton.className = 'delete-tag';
  deleteButton.addEventListener('click', function() {
      hashTagList.removeChild(hashTagButton);
      hashTagList.removeChild(deleteButton);
      repositionButtons(hashTagList);
  });

  hashTagButton.appendChild(deleteButton);
  hashTagList.appendChild(hashTagButton);
  hashTagForm.insertAdjacentElement('beforebegin', hashTagList);
  repositionButtons(hashTagList);
}

function repositionButtons(hashTagList) {
  const buttons = hashTagList.querySelectorAll('button');
  const deleteButtons = hashTagList.querySelectorAll('.delete-tag');

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.order = i;
      deleteButtons[i].style.order = i;
  }
}

