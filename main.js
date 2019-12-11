
// Shorthand for $( document ).ready()
$(function() {
    $("#searchUser").on("keyup",function(){
        console.log("e.target.value")
    })
})

$.ajax({
    url:"https://api.github.com/users/",
    data:{
        client_id:" ",
        client_secret:" "
    }
}) .done(function(user){
    $.ajax({
url:"https://api.github.com/users/" +username +'/repos',
data:{
    client_id:"",
    client_secret:""
}
    }).done(function(repos){
        console.log(repos);

    });
  $("#profile").html(`${user}` `${user.avatar_url}`)
});