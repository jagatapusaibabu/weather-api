document.addEventListener("DOMContentLoaded", function () {
    let inputEle = document.getElementById("location-input");
    let temple = document.getElementById("temp-value");
    let locEle = document.getElementById("location");
    let weatherdescEle = document.getElementById("weather-desc");
    let btnEle = document.getElementById("btn");
    let icon = document.getElementById("icon");
    const apiKey = "a5fb74b34fdfb2d02b6c88605a2fc5e5";

    btnEle.onclick = function () {
        if (inputEle.value === "") {
            alert("Please enter some location");
        } else {
            let loc = inputEle.value;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { description } = data.weather[0];

                    temple.innerText = Math.floor(feels_like - 273);
                    locEle.innerText = name;
                    weatherdescEle.innerText = description;
                })
                .catch(() => {
                    alert("Enter a valid location");
                });

            inputEle.value = "";
        }
    };
});

// let inputEle = document.getElementById("location-input");
// let temple = document.getElementById("temp-value");
// let locEle = document.getElementById("location");
// let weatherdescEle = document.getElementById("weather-desc"); // Change this to "weather-desc"
// let btnEle = document.getElementById("btn");
// let icon = document.getElementById("icon");
// const apiKey = "a5fb74b34fdfb2d02b6c88605a2fc5e5";

// btnEle.onclick = function () {
//     if (inputEle.value === "") 
//         alert("Please Enter some location");
//     else {
//         loc = inputEle.value;
//         url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 const { name } = data;
//                 const { feels_like } = data.main;
//                 const { description } = data.weather[0];
//                 temple.innerText = Math.floor(feels_like - 273);
//                 locEle.innerText = name;
//                 weatherdescEle.innerText = description;
//             })
//             .catch(() => {
//                 alert("Enter the valid location");
//             });
//         inputEle.value = "";
//     }
// };
