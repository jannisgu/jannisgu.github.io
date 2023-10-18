document.addEventListener("DOMContentLoaded", () => {
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
});
