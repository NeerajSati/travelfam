document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "none";
    document.querySelector(".loader-svg-container").style.visibility =
      "visible";
  } else {
    document.querySelector(".loader-svg-container").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
