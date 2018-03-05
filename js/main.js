/*$.ready(isRedirectedURI()) //wait for page load an call function

function isRedirectedURI() {
 // get access token from hash/fragment
console.log(localStorage.Bearer)
  if(window.location.href.indexOf("code=") > -1 || localStorage.Bearer >0){
    if(localStorage.Bearer){
      $("#apiButton").show();
    }else{
       var accessToken = localStorage.Bearer;
    }

  }else{
    $("#apiButton").show()
  }
  $("#apiButton").on("click",function(){
    var accessToken = localStorage.Bearer;
       var apiURL="https://api.spotify.com/v1/me"

    $.ajax({


     url: apiURL + accessToken,
       success: function(response){

             console.log(response);
           },

          error: function(r){
           console.log(r);
        }
      })
});
}*/
$("#apiButton").on("click",function(e){
  console.log(window.location)
  var uriHash= window.location.hash //holds my access token
  var accessToken = uriHash.replace('#access_token=', '')
  var apiURL= "https://api.spotify.com/v1/me"
$.ajax({

     url: apiURL,
     headers: {
      'Authorization': 'Bearer ' + accessToken
    },

     success: function(response){
       console.log(window.location.hash)
         console.log(response);
         $("#email").append("Account Owner: "+response.email);
          $("#version").append("This account has: Spotify "+response.product);
  
     },

     error: function(r){
       console.log(r);
}
})
}
)
/*$.ready(isRedirectedURI()) //wait for page load an call function

function isRedirectedURI() {
 // get access token from hash/fragment
 var uriHash = window.location.hash //holding the access token

 // if there's an access token available get images
 if (localStorage.igToken || uriHash.length > 0) { //anything in local storage or access token
   if (localStorage.igToken) {
     getImages(localStorage.igToken)
   } else {
     // get access token from URI
     var accessToken = uriHash.replace('#access_token=', '') //first time
     getImages(accessToken)
   }
 } else {
   // if not yet redirected hide results view
   $('.image-results-view').hide()
 }
}

function getImages(accessToken) {
 // if redirected hide initial view
 $('.sign-in-view').hide()

 // check if navigator geolocation is available from the browser's Window
 if (navigator.geolocation) { //geolocation is a property of navigator, the object

   // store accessToken locally so user doesn't have to make an API to call it again if they close the window and come back
   localStorage.igToken = accessToken

   // use the navigator given to us by the window.navigator object to find the user's location
   navigator.geolocation.getCurrentPosition(function(position) {
     var lat = position.coords.latitude
     var lng = position.coords.longitude



     // configure instagram endpoint with accessToken and user's location data
     var instagramEndpoint = 'https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lng + '&access_token=' + accessToken
     var instaEnd2 = "https://api.instagram.com/v1/media/{media-id}/likes?access_token=" + accessToken
     // call the instagram with configured URI
     $.ajax({
       url:instaEnd2,
       method: "GET",
       dataType: "jsonp",
       success: handleResponseSuccess
     })

  // else {
 //   $("div").append("Sorry Error")
 // }

     $.ajax({
       url: instagramEndpoint,
       method: 'GET',
       dataType: 'jsonp', //cors enabled
       success: handleResponseSuccess
     })
   // })
 // } else {
 //   $('.images').append('Sorry, the browser does not support geolocation')
 // }
})
}
}
function handleResponseSuccess(response){
 var allData = response.data
 console.log(response)

 // iterate through each piece of data
 allData.forEach(function(data) {
   var imageUrl = 'url(' + data.images.standard_resolution.url + ')'
   var likes = allData[0].likes.count + "Like(s)!"


   // create element
   var element = $('<div></div>').css({'background-image': imageUrl}).addClass('image')
   var el = $(".likes").append("<li>"+ likes+"</li>").addClass("likes")
   // append element to .images node
   $('.images').append(element)
 })
}
*/
