const time = document.getElementById('local-time');

setInterval(()=>{
    let date = new Date();
    let curr = date.toLocaleTimeString();
    time.innerHTML = `<span>${curr}</span>`
}, 1000);