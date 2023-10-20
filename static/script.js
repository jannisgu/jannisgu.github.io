document.addEventListener("DOMContentLoaded", () => {

  animation_experience_lists();

  const touch_bool = 'ontouchstart' in window ? true : false;
  let phone_bool = window.innerWidth < 768 ? true : false;

  if (phone_bool) {
    const phone_img = document.querySelector(".phone-img");
    phone_img.style.display = "block";
    phone_img.style.left = '80%';
    phone_img.style.scale = 1.1;

    setTimeout(() => {
      phone_img.style.scale = 1.0;
    }, 1000);
    setTimeout(() => {
      phone_img.style.zIndex = '-2';
    }, 2000);
  }


});




function animation_experience_lists() {
  const experienceLists = document.querySelectorAll(".experience-list");

  experienceLists.forEach((list) => {
    const header = list.querySelector("h3");
    const listItems = list.querySelectorAll("li");

    header.addEventListener("mouseover", () => {
        listItems.forEach((li) => {
            const span = li.querySelector("span")
            span.classList.toggle("open")
        })
    })
    header.addEventListener("mouseout", () => {
        listItems.forEach((li) => {
            const span = li.querySelector("span")
            span.classList.toggle("open")
        })
    })
  });
}