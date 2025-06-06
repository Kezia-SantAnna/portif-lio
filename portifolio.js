// window.scrollTo({ top: 0, behavior: 'smooth' });

// const element = document.getElementById('bio');
// element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });

document.getElementById("biografia").addEventListener("click", function () {
  const element = document.getElementById("bio");
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
  console.log(element.offsetTop);
});

