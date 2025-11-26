function disp(){
    let dateTime= new Date();
    let hr=dateTime.getHours()
    let min=dateTime.getMinutes()
    let sec=dateTime.getSeconds()
    

    let hr1 = hr>12 ? hr-12 :hr
    document.getElementById("hour").innerHTML=hr1 < 10 ? "0"+hr1 : hr1
    document.getElementById("min").innerHTML=min < 10 ? "0"+min : min
    document.getElementById("sec").innerHTML= sec < 10 ? "0"+sec : sec
    document.getElementById("ampm").innerHTML= 12 > hr1 ? "am" : "pm"
    
}

setInterval(disp,100)
