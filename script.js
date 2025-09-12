// For "View My Work" button

document.querySelector(".btn").addEventListener("click", () => {

    window.scrollTo({

        top: document.querySelector(".projects").offsetTop,

        behavior: "smooth"

    });

});

// For "Send" button

document.querySelector(".send").addEventListener("click", () => {

    alert("Message sent successfully! Thank you, Anusri 😊");

});