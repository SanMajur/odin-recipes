function myFunction(x) {
    x.classList.toggle("change");
  }
  function toggler() {
    const togglBtn = document.getElementById("linkItems")
    if (togglBtn.style.display === "flex") {
        togglBtn.style.display = "none"
    } else {
        togglBtn.style.display = "flex";
    }
  }