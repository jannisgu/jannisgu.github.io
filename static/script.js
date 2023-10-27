document.addEventListener("DOMContentLoaded", () => {
  let touch_bool = "ontouchstart" in window ? true : false;
  let phone_bool = window.innerWidth < 768 ? true : false;

  const experienceLists = document.querySelectorAll(".experience-list");

  animation_experience_lists(experienceLists);

  if (phone_bool) {
    touch_bool = true;
    animate_phone_img();
  }

  if (touch_bool) {
    window.addEventListener("scroll", scroll_focus);

    scroll_focus();
  }

  window.addEventListener("scroll", scroll_appear);
  scroll_appear();

  window.addEventListener("scroll", img_fade);
  img_fade();

  setupProjects();

  setupFooterLinksHover();
});

function setupProjects() {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    frontBackend(project);
    moreDetails(project);
    setupVideos(project);

    function frontBackend(project) {
      const frontendBtn = project.querySelector(".frontend");
      const backendBtn = project.querySelector(".backend");
      const frontendUl = project.querySelector(".frontend-ul");
      const backendUl = project.querySelector(".backend-ul");

      frontendBtn.addEventListener("click", () => {
        if (
          !frontendBtn.classList.contains("active") &&
          backendBtn.classList.contains("active")
        ) {
          frontendBtn.classList.add("active");
          backendBtn.classList.remove("active");
          frontendUl.classList.add("show");
          backendUl.classList.remove("show");
        }
      });
      backendBtn.addEventListener("click", () => {
        if (
          !backendBtn.classList.contains("active") &&
          frontendBtn.classList.contains("active")
        ) {
          backendBtn.classList.add("active");
          frontendBtn.classList.remove("active");
          backendUl.classList.add("show");
          frontendUl.classList.remove("show");
        }
      });
    }

    function moreDetails(project) {
      const btn = project.querySelector(".more-details-btn");
      const details = project.querySelector(".details>p");
      btn.addEventListener("click", () => {
        details.classList.toggle("show");
      });
    }

    function setupVideos(project) {
      const video = project.querySelector("video");
      const playBtn = project.querySelector(".play-btn");

      playBtn.addEventListener("mouseover", () => {
        video.style.boxShadow = "15px 15px 100px rgba(255, 255, 255, 0.3)"
        video.style.scale = "1.01"
      })
      playBtn.addEventListener("mouseout", () => {
        video.style.boxShadow = "15px 15px 100px rgba(255, 255, 255, 0)"
        video.style.scale = "1"
      })

      playBtn.addEventListener("click", () => {
        video.style.filter = "blur(0px)";
        video.style.opacity = "1";
        video.style.cursor = "pointer";
        playBtn.style.display = "none";
        video.controls = true;
        video.play();
      });
    }
  });
}

function setupFooterLinksHover() {
  const footer_links = document.querySelectorAll(".socials a");
  footer_links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const svg = link.querySelector("svg");
      svg.style.fill = "#ffffff";
    });
    link.addEventListener("mouseout", () => {
      const svg = link.querySelector("svg");
      svg.style.fill = "#000000";
    });
  });
}

function img_fade() {
  const window_height = window.innerHeight;
  const scroll_position = window.scrollY;

  let image = document.getElementById("me");
  const element_pos = image.getBoundingClientRect();

  if (element_pos.top + 75 < 0) {
    image.classList.add("scroll-focus");
  } else {
    image.classList.remove("scroll-focus");
  }
}

function scroll_appear() {
  const appear_elements = document.querySelectorAll(".appear");
  const w_bottom = window.innerHeight + window.scrollY;
  const w_top = scrollY;
  appear_elements.forEach((element) => {
    const pos = element.getBoundingClientRect();
    if (pos.top < window.innerHeight - 50) {
      element.classList.add("appeared");
    }
  });
}

function scroll_focus() {
  const window_height = window.innerHeight;
  const scroll_position = window.scrollY;

  const target_position = window_height * 0.4;

  let hover_items = document.querySelectorAll(".hover");
  hover_items.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("scroll-focus");
    });
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
        element_pos.top <= target_position + 20 &&
        element_pos.bottom >= target_position - 20
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
