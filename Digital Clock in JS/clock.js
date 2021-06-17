function showtime(){
    var date=new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var Session = "AM"

    if (h == 0){
        h = 12;
    }
    if(h > 12){
        h= h - 12;
        Session="PM"
    }

    h = (h < 10) ? "0" + h : h 
    m = (m < 10) ? "0" + m : m 
    s = (s < 10) ? "0" + s : s
    
    var time = h + ":" + m + ":" + s + " " + Session;
    // document.getElementById("MyClockDisplay").innerHTML = time
    // document.getElementById("MyClockDisplay").textContent = time
    document.getElementById("MyClockDisplay").innerText = time

    setTimeout(showtime ,1000)

}
showtime();