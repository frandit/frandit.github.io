// Get the modal

var modal = document.getElementById("myModal");
var img = document.querySelector(".img-one");
var img2 = document.querySelector(".img-two");
var img3 = document.querySelector(".img-three");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

hacerModal(modal, img, modalImg, captionText, span);
hacerModal(modal, img2, modalImg, captionText, span);
hacerModal(modal, img3, modalImg, captionText, span);

function hacerModal(modal, img, modalImg, captionText, span) {
    let myModal = modal;

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let myImg = img;
    let myModalImg = modalImg;
    let myCaptionText = captionText
    myImg.onclick = function() {
        myModal.style.display = "block";
        myModalImg.src = this.src;
        myCaptionText.innerHTML = this.alt;

    }

    // Get the <span> element that closes the modal
    let mySpan = span;

    // When the user clicks on <span> (x), close the modal
    mySpan.onclick = function() {
        modal.style.display = "none";
    }

    myModal.onclick = function() {
        modal.style.display = "none";
    }

}