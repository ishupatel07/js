// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
setTimeout(() => {
    span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      document.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      
      // Open the modal
      modal.style.display = "block";
       
}, 1000);

