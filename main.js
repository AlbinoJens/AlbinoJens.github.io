function addNums(num1) {
    return num1 + 5;
}

console.log(addNums(5));

document.onkeypress = (e) => {
    e = e || window.event;
    // use e.keyCode
    keyCode = e.keyCode;

    console.log(keyCode);

    // 101 = E
    if (keyCode == 101) {
        var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav');
        audio.play();

        if(document.querySelector('.highlight'))    
            document.querySelector('.highlight').classList.remove("highlight");

        document.querySelector('.E').classList.add("highlight");

    }

    // 102 = F
    if (keyCode == 102) {
        var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav');
        audio.play();

        if(document.querySelector('.highlight'))    
            document.querySelector('.highlight').classList.remove("highlight");
        
        document.querySelector('.F').classList.add("highlight");
    }

    // 114 = R
    if (keyCode == 114) {
        var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav');
        audio.play();

        if(document.querySelector('.highlight'))    
        document.querySelector('.highlight').classList.remove("highlight");
        
    document.querySelector('.R').classList.add("highlight");
    }        


    // 103 = G
    if (keyCode == 103) {
        var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav');
        audio.play();

        if(document.querySelector('.highlight'))    
        document.querySelector('.highlight').classList.remove("highlight");
        
    document.querySelector('.G').classList.add("highlight");
    }        
    


    // 118 = V
    if (keyCode == 118) {
        var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav");
        audio.play();
        
        if(document.querySelector('.highlight'))    
        document.querySelector('.highlight').classList.remove("highlight");
        
    document.querySelector('.V').classList.add("highlight");

 }

// 98 = B
if (keyCode == 98) {
    var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav');
    audio.play();


    if(document.querySelector('.highlight'))    
    document.querySelector('.highlight').classList.remove("highlight");
    
document.querySelector('.B').classList.add("highlight");

}        


// 104 = H
if (keyCode == 104) {
    var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav');
    audio.play();

    if(document.querySelector('.highlight'))    
    document.querySelector('.highlight').classList.remove("highlight");
    
document.querySelector('.H').classList.add("highlight");


}        



// 105 = I
if (keyCode == 105) {
    var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav');
    audio.play();


    if(document.querySelector('.highlight'))    
    document.querySelector('.highlight').classList.remove("highlight");
    
document.querySelector('.I').classList.add("highlight");

}        


// 106 = J
if (keyCode == 106) {
    var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav");
    audio.play();

    if(document.querySelector('.highlight'))    
    document.querySelector('.highlight').classList.remove("highlight");
    
document.querySelector('.J').classList.add("highlight");

}        


// 107 = K
if (keyCode == 107) {
    var audio = new Audio('https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav');
    audio.play();


    if(document.querySelector('.highlight'))    
    document.querySelector('.highlight').classList.remove("highlight");
    
document.querySelector('.K').classList.add("highlight");


}        



 }
