

var app = new Vue({
  el: '#app',
  data: {
   content: ['Introduction']
  }
})



buildGator: function(){
      console.log("usersurvey")
      // create an alligator object from form input values
      var newG = {
        Location: document.querySelector("#Location").value,
        Age: document.querySelector("#Age").value,
        School: document.querySelector("#School").value,
        
       
      }

    

