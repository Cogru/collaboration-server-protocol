/**
 * $File: main.js $
 * $Date: 2024-08-27 13:52:14 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2024 by Shen, Jen-Chieh $
 */

"use strict";

const ssSeconds = 1000 * 7;
var slideIndex = 0;

function runSlideshow() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  ++slideIndex;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(runSlideshow, ssSeconds);
}

runSlideshow();
