"use strict"

let data = [{
    title: "History",
    imgUrl: "./images/1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus, quisquam natus quidem ducimus tempora at vel hic quod rerum nisi dignissimos dolor voluptate eos neque delectus porro reprehenderit necessitatibus fugiat sit quas. Officiis architecto quis impedit vel tempora nobis esse a nostrum, ab saepe, error commodi voluptate doloribus harum. Ducimus neque, quam soluta aperiam vero dolore incidunt laboriosam veritatis."
}, {
    title: "Vision",
    imgUrl: "./images/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium iusto quasi autem necessitatibus, nesciunt numquam quam fugit optio eveniet illum, est odio dolore, impedit distinctio ad labore? Magnam neque autem perspiciatis repellendus non eveniet alias quam voluptate maxime, cumque dolorum doloremque? Delectus, cum vero? Consequatur quaerat maiores voluptatum nemo soluta eos ipsa magni reprehenderit amet assumenda sed esse quo laborum, accusamus ab possimus, nihil quidem eveniet iusto autem voluptatem."
}, {
    title: "Goals",
    imgUrl: "./images/3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium iusto quasi autem necessitatibus, nesciunt numquam quam fugit optio eveniet illum, est odio dolore, impedit distinctio ad labore?"
}]

let tabs = document.getElementById("box__tabs");

let img = document.getElementById("img-js");

let tab = [...document.getElementsByClassName("tab")];

let text = document.getElementById("box__text");

let removeAll = function () {
    tab.forEach((ele) => {
        ele.classList.remove("active");
    })
}

let show = function (e) {

    data.forEach((ele) => {
        if (e.textContent === ele.title) {
            text.textContent = ele.text;
            img.src = ele.imgUrl;
            e.classList.add("active");
        }
    })
}

tabs.addEventListener("click", (e) => {
    removeAll();
    show(e.target);
})


show(tab[0])