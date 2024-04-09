let date = document.querySelector(".date");

setInterval(() => {
    let d = new Date();
    let _date = d.getDate();
    let _month = d.getMonth();
    let _year = d.getFullYear();
    date.innerHTML = ` ${_date} - ${_month} - ${_year}`;
},1000
)
