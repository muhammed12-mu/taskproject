const taskOne = document.getElementById('one');
const taskTwo = document.getElementById('two');
const inputTrack = document.querySelector('.track-input');
const father = document.querySelector('.container');


const form = document.getElementById("form");
const inputText = document.querySelector('.inputone');
const inputDate = document.querySelector('.inputtwo');
const listContain = document.querySelector('.come');
const deleteBtn = document.querySelector('.fan');


taskOne.addEventListener("click", () => {
    inputTrack.classList.toggle('toggle_track_inputs')
    taskOne.style.display = 'none'
    taskTwo.style.display = 'block'
});

let singleLine = {
    text: "",
    date: "",
    id: new Date().getTime(),
}

const singleLines = JSON.parse(localStorage.getItem("list")) ?? [
    first = {
        text: 'going to school today',
        date: "21/12/2023",
        id: new Date().getTime(),
    },
    second = {
        text: 'going to school today',
        date: "21/12/2023",
        id: new Date().getTime(),
    },
    third = {
        text: 'going to school today',
        date: "21/12/2023",
        id: new Date().getTime(),
    }
];


taskTwo.addEventListener("click", () => {
    inputTrack.classList.remove('toggle_track_inputs')
    taskOne.style.display = 'block'
    taskTwo.style.display = 'none'
});

inputText.addEventListener("change", function (event) {
    singleLine.text = event.target.value;
});

inputDate.addEventListener("change", function (event) {
    singleLine.date = event.target.value;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (singleLine.text.trim() == '' && singleLine.date.trim() == '') return;

    singleLines.push(singleLine);
localStorage.setItem("list", JSON.stringify(singleLines))

    // resetting 
    singleLine = {
        text: "",
        date: "",
        id: "",
    };
    form.reset()
    // console.log(inputText.value);



    getAllTodo()
    // outputting value for the task

});

const getAllTodo = function () {
    let paraHtml = '';
    singleLines.forEach(function (value) {
        paraHtml += `<div class="paragraph">
                            <p> 
                            ${value.text} 
                            <span> ${value.date}</span> </p>
                            <button class="fan">Delete</button>
                        </div>`


        listContain.innerHTML = paraHtml;

        // deleteBtn.forEach(function (btn) {
        //     btn.addEventListener("click", function () {
        //         console.log(deleteBtn)
        //     })
        // })
    });




};

getAllTodo()


