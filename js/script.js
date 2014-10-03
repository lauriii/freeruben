"use strict";
var easter_egg = new Konami( function() { ruben_attack(); } );

function ruben_attack() {
  // Subtract Druplicon width and height to ensure that he is only spawned
  // inside the window area and does not cause it to scroll.
  var width = document.body.clientWidth - 256;
  var height = document.body.clientHeight -256;
  // Select a random image.
  var max = 1000;
  var count = 0;
  spawnImage(width, height, max, count);
}

/**
 * Spawn an image randomly on the screen.
 */
function spawnImage(width, height, max, count) {
  // Generate random location.
  var x = Math.floor(Math.random() * width);
  var y = Math.floor(Math.random() * height);
  var url = 'img/ruben.png';
  var img = document.createElement('img');
  img.src = url;
  img.style.position = 'absolute';
  img.style.left = x + 'px';
  img.style.top = y + 'px';

  // Append Druplicon image tag to HTML body.
  document.getElementsByTagName('body')[0].appendChild(img);
  count++;

  if (count < max) {
    setTimeout('spawnImage(' + width + ', ' + height + ', ' + max + ', ' + count + ')', 10);
  }
}
