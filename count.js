const endDate = "22 february 2024  06:34 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");



function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; // convert mili seconds to seconds

    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24); //conver days
    inputs[1].value = Math.floor(diff / 3600) % 24; //convert hours
    inputs[2].value = Math.floor(diff / 60) % 60; //convert minutes
    inputs[3].value = Math.floor(diff) % 60;

    // conver to days
}
//call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)