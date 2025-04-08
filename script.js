document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".scroll-up");
    btn.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
