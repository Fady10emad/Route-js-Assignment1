var arr=[ [" 'Be yourself; everyone else is already taken.' " , "Oscar Wilde" ] , [" 'I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.'" , "Marilyn Monroe"] , ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , "Albert Einstein "] , [" A room without books is like a body without a soul. " , "Marcus Tullius Cicero"],["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." , "Bernard M. Baruch"] ,["You know you're in love when you can't fall asleep because reality is finally better than your dreams." , "Dr. Seuss"],["You only live once, but if you do it right, once is enough.","Mae West"],
["  In three words I can sum up everything I've learned about life: it goes on. " , "Robert Frost"] , ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals." , "J.K. Rowling, Harry Potter and the Goblet of Fire"] ,["If you tell the truth, you don't have to remember anything." , "Mark Twain"] , ["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." , "Maya Angelou"] , ["Always forgive your enemies; nothing annoys them so much.","Oscar Wilde"] ]

var Qoute = document.getElementById("Demo")
var Auther = document.getElementById("Demo2")


function DisplayQoute(){
    var Array_Qoute=arr[GetRandomNumber(arr.length)]

    Qoute.innerHTML=Array_Qoute[0]
    Auther.innerHTML= "~" + Array_Qoute[1] + "~"
}


let previousNumber ;
function GetRandomNumber(Number){
    let randomNumber = Math.floor(Math.random() * Number);
    
    while (randomNumber === previousNumber) {
        randomNumber = Math.floor(Math.random() * Number);
    }
    
    previousNumber = randomNumber;
    return randomNumber;
}
