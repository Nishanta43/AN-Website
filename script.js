const backgrounds = [
    "url('images/picture1.jpg')",
    "url('images/picture2.jpg')"
  ];
  
  let currentBackground = 0;
  
  function changeBackground() {
    const homeSection = document.getElementById("home");
    homeSection.style.backgroundImage = backgrounds[currentBackground];
    currentBackground = (currentBackground + 1) % backgrounds.length;
  }
  
  window.onload = function () {
    changeBackground();
    setInterval(changeBackground, 3000);
  };
  