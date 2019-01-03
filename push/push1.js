var e = new Notification("ttest", { 
    body : "nikngjor",
    icon:"https://pbs.twimg.com/profile_images/764080533395611648/vBXXzYUT_400x400.jpg" ,
});

e.onclick = function(){
      location.href = "https://www.google.com" 
  }; 

e.onshow = function(){
     console.log("opens");
  };

e.onclose = function(){
     console.log("closes");
  };
