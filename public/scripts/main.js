const mTime = {
  s: 1000,
  m: 1000 * 60,
  h: 1000 * 60 * 60,
  d: 1000 * 60 * 60 * 24,
}
let lang = Navigator === 'pt' ? 'pt' : 'en';
document.querySelector(".lang-toggle[data-lang=" + lang + "]").classList.add("selected");
const changeLang = new Event('changeLanguage')

const createTimer = function(timerEl) {
  const [targetDay, targetMonth, targetYear] = timerEl.getAttribute('data-target-date').split('-');
  const targetTime = Date.UTC(targetYear, targetMonth - 1, targetDay);
  const timer = null;

  const getTime = function() {
    let timeLeft = targetTime - Date.parse(new Date());

    const daysLeft = Math.floor(timeLeft / mTime.d);
    timeLeft = timeLeft - daysLeft * mTime.d;

    const hoursLeft = Math.floor(timeLeft / mTime.h);
    timeLeft = timeLeft - hoursLeft * mTime.h;

    const minutesLeft = Math.floor(timeLeft / mTime.m);
    timeLeft = timeLeft - minutesLeft * mTime.m;

    const secondsLeft = Math.floor(timeLeft / mTime.s);
    timeLeft = timeLeft - secondsLeft * mTime.s;

    return {
      s: secondsLeft,
      m: minutesLeft,
      h: hoursLeft,
      d: daysLeft
    }
  };
  const updateTime = function() {
    const timeLeft = getTime();

    if (timeLeft.d > 6) {
      timerEl.innerHTML = timeLeft.d + dict[lang].timer.daysLeft;
    } else if (timeLeft.d > 1) {
      timerEl.innerHTML = timeLeft.d + dict[lang].timer.daysAnd + '\n' + timeLeft.h + ':' + timeLeft.m + ':' + timeLeft.s + dict[lang].timer.left
    } else if(timeLeft.h >= 0 && timeLeft.m >= 0 && timeLeft.s > 0) {
      timerEl.innerHTML = timeLeft.h + ':' + timeLeft.m + ':' + timeLeft.s + dict[lang].timer.left
    } else {
      timerEl.parentNode.removeChild(timerEl);
      clearInterval(timer);
    }
  };

  if (targetTime - Date.parse(new Date()) > 0) {
    timerEl.addEventListener('changeLanguage', function() { updateTime(); })

    updateTime();

    if (getTime().d <= 6) {
      const timer = setInterval(function() {
        updateTime();
      }, 1000);
    }
  } else {
    timerEl.parentNode.removeChild(timerEl);
  }
}

const updateText = function(el) {
  el.innerHTML = dictLook(el.getAttribute('data-trans'))
}

for (var i = 0; i < document.querySelectorAll(".timer").length; i++) {
  createTimer(document.querySelectorAll(".timer")[i])
}

for (var i = 0; i < document.querySelectorAll("[data-trans]").length; i++) {
  updateText(document.querySelectorAll("[data-trans]")[i]);
  document.querySelectorAll("[data-trans]")[i].addEventListener('changeLanguage', function(e) { updateText(e.target) })
}

for (var i = 0; i < document.querySelectorAll(".lang-toggle").length; i++) {
  document.querySelectorAll(".lang-toggle")[i].addEventListener("click", function(e) {
    const targetLang = e.target.getAttribute('data-lang');
    if (lang !== targetLang) {
      lang = targetLang;
      document.querySelector(".lang-toggle.selected").classList.remove("selected");
      e.target.classList.add("selected");

      document.querySelector('.timer').dispatchEvent(changeLang);
      for (var i = 0; i < document.querySelectorAll("[data-trans]").length; i++) {
        document.querySelectorAll("[data-trans]")[i].dispatchEvent(changeLang);
      }
    }
  })
}
