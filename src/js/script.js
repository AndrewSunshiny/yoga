require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

  'use strict';
  let calc = require('./parts/calc.js'),
    form = require('./parts/form.js'),
    modal = require('./parts/modal.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js');

  calc();
  form();
  modal();
  slider();
  tabs();
  timer();

});