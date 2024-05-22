document.addEventListener("DOMContentLoaded", function () {
    const thumbnail = document.querySelector(".thumbnail");
    const popup = document.getElementById("popup");
    const popupImage = popup.querySelector("img");

    thumbnail.addEventListener("click", function () {
        const imageUrl = this.getAttribute("src");
        popupImage.setAttribute("src", imageUrl);
        popup.style.display = "flex";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === this) {
            popup.style.display = "none";
        }
    });
});
