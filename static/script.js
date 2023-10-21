document.addEventListener("DOMContentLoaded", () => {
  const touch_bool = "ontouchstart" in window ? true : false;
  let phone_bool = window.innerWidth < 768 ? true : false;

  const experienceLists = document.querySelectorAll(".experience-list");

  animation_experience_lists(experienceLists);

  if (phone_bool) {
    animate_phone_img();
  }

  if (touch_bool) {
    window.addEventListener("scroll", check_element_position);

    check_element_position();
  }

  window.addEventListener("scroll", check_appear);
  check_appear();
});

function check_appear() {
  const appear_elements = document.querySelectorAll(".appear");
  const w_bottom = window.innerHeight + window.scrollY;
  const w_top = scrollY;
  appear_elements.forEach((element) => {
    const pos = element.getBoundingClientRect();
    if (pos.top < window.innerHeight - 75 && pos.bottom > 75) {
      console.log(
        element.className,
        "pTOP: ",
        pos.top,
        " pBOT: ",
        pos.bottom,
        "\n",
        "wTOP: ",
        w_top,
        " wBOT: ",
        w_bottom
      );
      element.classList.add("appeared");
    } else if (element.classList.contains("appeared")) {
      element.classList.remove("appeared");
    }
  });
}

function check_element_position() {
  const window_height = window.innerHeight;
  const scroll_position = window.scrollY;

  const target_position = window_height * 0.4;

  let hover_items = document.querySelectorAll(".hover");
  hover_items.forEach((element) => {
    const element_pos = element.getBoundingClientRect();

    if (element.classList.contains("phone-img")) {
      if (
        element_pos.top + 100 <= target_position &&
        element_pos.top + 200 >= target_position
      ) {
        element.classList.add("scroll-focus");
      } else {
        element.classList.remove("scroll-focus");
      }
    } else {
      if (
        element_pos.top <= target_position + 15 &&
        element_pos.bottom >= target_position - 15
      ) {
        element.classList.add("scroll-focus");
      } else {
        element.classList.remove("scroll-focus");
      }
    }
  });
}
function animate_phone_img() {
  const text_header = document.querySelector(".text-header");
  var tl = anime.timeline({});

  text_header.style.filter = "blur(5px)";
  const phone_img = document.querySelector(".phone-img");

  tl.add({
    targets: phone_img,
    left: "80%",
    easing: "spring(0, 100, 10, 0)",
  });
  tl.add({
    targets: phone_img,
    filter: "blur(1px)",
  });
  tl.add(
    {
      targets: text_header,
      filter: "blur(0px)",
    },
    2000
  );
}

function animation_experience_lists(experienceLists) {
  experienceLists.forEach((list) => {
    const header = list.querySelector("h3");
    const listItems = list.querySelectorAll("li");

    header.addEventListener("mouseover", () => {
      listItems.forEach((li) => {
        const span = li.querySelector("span");
        span.classList.toggle("open");
      });
    });
    header.addEventListener("mouseout", () => {
      listItems.forEach((li) => {
        const span = li.querySelector("span");
        span.classList.toggle("open");
      });
    });
  });
}
