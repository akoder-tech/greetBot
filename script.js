
myWishes = ["Christmas", "Newyears", "Summer", "Thanksgiving"];


wishesText = ["Merry Christmas ", "Happy New years ", "Have a good summer ", "Happy thanksgiving "]


p2 = "It will be lots of fun!"






function myGen(event) {
    Myname = document.getElementById("myInput").value;

    document.getElementById("placeholder").textContent = wishesText[event] + Myname
    
 
}


