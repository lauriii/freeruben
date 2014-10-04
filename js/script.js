"use strict";
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

var Konami = new Konami();

var code = [[75, 73, 84, 84, 69, 78], [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]];
for (var i = 0; i < code.length; i++) {
  var sequence = (code[i] == true) ? [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] : code[i];
  console.log(sequence);
  var Konami = new Konami();
  Konami.konami.addEvent(code[i]);
  //var easter_egg = new Konami( function() { ruben_attack(); }, sequence);
}

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

  document.getElementsByTagName('body')[0].appendChild(img);
  count++;

  if (count < max) {
    setTimeout('spawnImage(' + width + ', ' + height + ', ' + max + ', ' + count + ')', 10);
  }
}
