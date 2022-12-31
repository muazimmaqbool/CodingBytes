function chat(){
    let quetions={
        "hi":"hello :)",
        "how are you":"Good :) You say?",
        "i'm also good":"How can i help you!",
        "who are you":"I'm codewithMuazim",
        "your favourite language":"Java, but most people hate it :(",
        "okay":"Thanku for being here!",
        "bye":"Okay! see you soon... :)",
    };
    let user=document.getElementById("questionBox").value;
    document.getElementById("answerBox").innerHTML=user + "<br>";
    if(user in quetions){
        document.getElementById("answerBox").innerHTML=quetions[user] +"<br>";
    }
    else{
        document.getElementById("answerBox").innerHTML="sorry, its not in my database";
    }
}