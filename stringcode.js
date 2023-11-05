function checkCreds(){
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("fname").value;
    console.log("The first name was inputted as " + firstName);
    //working on inputting last name
    lastName = document.getElementById("lname").value;
    console.log("The last name was inputted as " + lastName);
    //working on inputting zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);
    //working on both first and last name
    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);
    //working on inputting full name
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");
    //working on inputting zipcode
    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //things to check for... fullNameLength is less than 20 characters,
    // zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
    } else {
        alert("User credinetals passed, welcome to the site, " + fullName);
    }




}

function checkPalin(){
    console.log("checkPalin() started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNospaces;
    entStrNospaces = entStr.split(" ").join("");
    console.log("entStr is " + entStrNospaces);

    //create rev array var and rev string
    var revStr;
    const revArray = [];
    var length = entStrNospaces.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >=0; i--){
        revArray.push(entStrNospaces[i]);
    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNospaces === revStr);
    console.log("the ent and reverse being equal is: " + equal);

    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome";
    }
}   

function playStation(){
    //write to the log for debugging
    console.log("playStation() started");
    mySound = new sound("us-lab-background-1.mp3");
    console.log("playing us-lab-background-1 using the sound() function");
    mySound.play();
}

function sound(srcFile){
    //create a instance of the audio class
    this.sound = document.createElement("audio");
    //sets the source for srcFile
    this.sound.src = srcFile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    //not gonna load audio through the control only play sound
    document.body.appendChild(this.sound);
    this.play = function(){   
        this.sound.play();
    //to play all the sounds
    }
    //you can stop the audio with this function
    this.stop = function(){
        this.sound.pause();  
        //you can pause your audio with this function
    }
}