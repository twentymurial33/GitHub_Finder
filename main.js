
// Shorthand for $( document ).ready()
$(function() {
    $("#searchUser").on("keyup",function(){
        console.log("e.target.value")
    })
})

$.ajax({
    url:"https://api.github.com/users/" +username,
    data:{
        client_id:" ",
        client_secret:" "
    }
}) .done(function(user){
  console.log(user);
});