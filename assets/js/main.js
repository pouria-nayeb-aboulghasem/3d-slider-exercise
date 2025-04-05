const prev = document.querySelector(".slider__button--prev"),
    next = document.querySelector(".slider__button--next");

next.addEventListener("click", () => {
    let items = document.querySelectorAll(".slider__item");

    document.querySelector(".slider__list").appendChild(items[0]);
});

prev.addEventListener("click", () => {
    let items = document.querySelectorAll(".slider__item");

    document.querySelector(".slider__list").prepend(items[items.length - 1]);
});