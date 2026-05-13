document.addEventListener("DOMContentLoaded", function() {
  var fadeElements = document.querySelectorAll(".scroll-fade");
  
  function checkVisibility() {
    for (var i = 0; i < fadeElements.length; i++) {
      var el = fadeElements[i];
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100 && rect.bottom > 0) {
        el.classList.add("scroll-visible");
      }
    }
  }
  
  checkVisibility();
  
  window.addEventListener("scroll", checkVisibility);
  
  var contestBtn = document.getElementById("contestBtn");
  var collabBtn = document.getElementById("collabBtn");
  var form = document.getElementById("joinForm");
  var msg = document.getElementById("formMsg");

  if (contestBtn) {
    contestBtn.addEventListener("click", function() {
      alert('Конкурс "Цвета ротко" — приз 30 000₽ и публикация в галерее!');
    });
  }

  if (collabBtn) {
    collabBtn.addEventListener("click", function() {
      alert("Чат для коллабораций доступен в Telegram. Присоединяйся!");
    });
  }

  if (form && msg) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var name = document.getElementById("name");
      if (name) {
        var nameValue = name.value.trim();
        if (!nameValue) {
          msg.innerText = "Напиши своё имя";
          msg.style.color = "#AE322A";
          return;
        }
        msg.innerHTML = nameValue + ", спасибо! Мы свяжемся с тобой.";
        msg.style.color = "#fff2df";
        form.reset();
        setTimeout(function() {
          msg.innerText = "";
        }, 3000);
      }
    });
  }
});