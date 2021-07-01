window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.remove('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = Date();

  function getRemainingTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()) + Math.pow(10, 8);
    if (t < 0) {
      t = 0;
    }
    let
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getRemainingTime(endtime);

      function addTextContent(element, time) {
        element.textContent = time;
        if (element.textContent.length < 2) {
          element.textContent = '0' + time;
        }
      }
      addTextContent(hours, t.hours);
      addTextContent(minutes, t.minutes);
      addTextContent(seconds, t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);

  // Modal 

  let more = document.querySelector('.more'),
    descriptionBtns = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  function openModal(btn) {
    overlay.style.display = 'block';
    btn.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    descriptionBtns.forEach(btn => {
      btn.classList.remove('more-splash');
    });
    document.body.style.overflow = '';
  }

  more.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  descriptionBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
});