function store() {
    //retrieving data
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Subject = document.getElementById("Subject").value;
    var Message = document.getElementById("Message").value;

    //storing data
   var Name = localStorage.setItem("Name",Name);
   var Email = localStorage.setItem("Email",Email);
   var Subject = localStorage.setItem("Subject",Subject);
   var Message = localStorage.setItem("Message",Message);

    
    
} 