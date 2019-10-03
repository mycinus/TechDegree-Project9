
$('.photo-slides').slickLightbox({
    caption: 'caption'
  });


//global variables
let photoID = ['01', '02', '03', '04', '05', '06', '07', '08','09', '10', '11', '12'];
let visiblePhotos = [];
let invisiblePhotos = [];




function getSearch() {

    var search_value = document.getElementById('searchbar').value;
    return search_value;
}

function setVisible(id) {
  var element = document.getElementById(id);
  element.style.display = 'block';
  //console.log('Item is now visible!');
}

function setInvisible(id) {
  var element = document.getElementById(id);
  //console.log('ID for image to be invisible', id);
  element.style.display = "none";

}

const input = document.querySelector('input'); //checks if user inputs data into the search bar
input.addEventListener('input', evt => {
  // Validate input

  var user_input = getSearch();
  var photo_gallery = document.getElementsByClassName("image");
  //console.log(photo_gallery);
  //console.log(photo_gallery[0].getAttribute('data-caption'));

if( user_input.length > 2) {
  for(var i = 0; i < photo_gallery.length; i++) {

    var caption = photo_gallery[i].getAttribute('data-caption');

    if( user_input.length > 2) {
      var splitter = caption.split(" ");
      //console.log(splitter);
      //console.log('USER INPUT:', user_input);
      for(var j = 0; j < splitter.length; j++) {

        //console.log(splitter[j], caption)
        //console.log('HELOOOOOOOOOOOOOOOOOOOOO')
        //console.log('THIS IS THE WORD,' , splitter[j].toLowerCase());
        //console.log(user_input);
        if(splitter[j].toLowerCase().includes(user_input.toLowerCase())) {
          //console.log('^^^^^^^^^^YES^^^^^^^^^^^');
          //console.log(photo_gallery[i].getAttribute('id'), splitter[j]);
          visiblePhotos.push(photo_gallery[i].getAttribute('id'));
          break;
        } 
      }

  }
}

//console.log('This is the visible photos list', visiblePhotos);
for(var a=0; a<photoID.length; a++) { ///////////////////check this 
  if(visiblePhotos.includes(photoID[a]) ) {
    setVisible(photoID[a]);
    //console.log('hello there this is included', visiblePhotos[a]);
    //photoID.splice(visiblePhotos[a], 1);
    //console.log('hello there this is the updated list', photoID);
  } else {
    //console.log('Else even here?', photoID[a]);
    invisiblePhotos.push(photoID[a]);
  }
}
//console.log('THIS IS PHOTOS LIST BEFORE EMPTIED OUT', visiblePhotos);
visiblePhotos = [];
//console.log('VIS PHOTOS LIST', visiblePhotos);


//console.log('FINNNNNNNNNNNN');
//console.log('The list of photo list that needs to be removed.', invisiblePhotos);
for(var v=0; v<invisiblePhotos.length; v++) {
  setInvisible(invisiblePhotos[v]);
}

invisiblePhotos = [];
//console.log('INVIS PHOTOS LIST', invisiblePhotos);


} else {
  for(var b=0; b<photoID.length; b++) {
    setVisible(photoID[b]);
  }
  //console.log('All pictures are visible');
}

})

