
const url = 'https://randomuser.me/api/?results=12';
const popup0 = document.getElementById('popup0');
const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');
const popup7 = document.getElementById('popup7');
const popup8 = document.getElementById('popup8');
const popup9 = document.getElementById('popup9');
const popup10 = document.getElementById('popup10');
const popup11 = document.getElementById('popup11');

const close = document.getElementsByClassName('close');
const modal_window = document.getElementsByClassName('modal');
var span = document.getElementsByClassName("close")[0];


let formatphone = (str) => {
  let cleaned = ('' + str).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') -' + match[2] + '-' + match[3]
  } else {

    return str;

  }
};


fetch(url)
  .then(response => response.json())
  .then(data => getBasicInfo(data))



function addData(ul_name, results) {


  var image = document.createElement("img");
  var listItem = document.createElement("li");
  var listItem2 = document.createElement("li");
  var listItem3 = document.createElement("li");
  var listItem4 = document.createElement("li");

  image.src = results['picture'].large;
  listItem.appendChild(image);
  listItem.setAttribute("class", "propic");
  ul_name.appendChild(listItem);


  let name = results['name'].first + " " + results['name'].last;
  let finalName = name.charAt(0).toUpperCase() + name.slice(1);
  listItem2.innerHTML = finalName.bold();
  listItem2.setAttribute("class", "bold_name");
  ul_name.appendChild(listItem2);


  let email = results['email'];
  listItem3.innerHTML = email;
  ul_name.appendChild(listItem3);


  let city = results['location'].city;
  let finalCity = city.charAt(0).toUpperCase() + city.slice(1);
  listItem4.innerHTML = finalCity;
  ul_name.appendChild(listItem4);




}

function addModal(ulmodal, results) {

  var item = document.createElement("li");
  var item2 = document.createElement("li");
  var item3 = document.createElement("li");


  addData(ulmodal, results);

  const hline = document.createElement('hr');
  ulmodal.appendChild(hline);

  let phone = results['cell'];
  item.innerHTML = formatphone(phone);
  ulmodal.appendChild(item);


  let address = results['location'].street + ", " + results['location'].state + " " + results['location'].postcode;
  item2.innerHTML = address;
  ulmodal.appendChild(item2);


  let birthdate = 'Birthday: ' +  results['dob'].date.substr(0,10);
  item3.innerHTML = birthdate;
  ulmodal.appendChild(item3);


}


function boldName() {

  let boldCollection = document.getElementsByClassName('bold_name');

  for(var i = 0; i < boldCollection.length; i++) {

    boldCollection[i].style.fontSize = 'x-large';
  }

}



function getBasicInfo(data) {

for( var i = 0; i < 12; i++) {

  let ulist = document.getElementById('card'+ i);
  let ulmodal = document.getElementById('modal'+ i);
  let results = data.results[i];
  addData(ulist, results);
  addModal(ulmodal, results);

  boldName();

}
}


document.getElementById('first').addEventListener('click', (e) => {

  popup0.style.display = "block";

});

document.getElementById('sec').addEventListener('click', (e) => {

  popup1.style.display = "block";

});


document.getElementById('third').addEventListener('click', (e) => {

  popup2.style.display = "block";

});

document.getElementById('fourth').addEventListener('click', (e) => {

  popup3.style.display = "block";

});

document.getElementById('fifth').addEventListener('click', (e) => {

  popup4.style.display = "block";

});

document.getElementById('sixth').addEventListener('click', (e) => {

  popup5.style.display = "block";

});

document.getElementById('seventh').addEventListener('click', (e) => {

  popup6.style.display = "block";

});

document.getElementById('eighth').addEventListener('click', (e) => {

  popup7.style.display = "block";

});

document.getElementById('nineth').addEventListener('click', (e) => {

  popup8.style.display = "block";

});

document.getElementById('tenth').addEventListener('click', (e) => {

  popup9.style.display = "block";

});

document.getElementById('eleventh').addEventListener('click', (e) => {

  popup10.style.display = "block";

});

document.getElementById('twelve').addEventListener('click', (e) => {

  popup11.style.display = "block";

});



  close[0].addEventListener('click', (e) => {

    popup0.style.display = "none";

  })

  close[1].addEventListener('click', (e) => {

    popup1.style.display = "none";

  })

  close[2].addEventListener('click', (e) => {

    popup2.style.display = "none";

  })

  close[3].addEventListener('click', (e) => {

    popup3.style.display = "none";

  })

  close[4].addEventListener('click', (e) => {

    popup4.style.display = "none";

  })

  close[5].addEventListener('click', (e) => {

    popup5.style.display = "none";

  })

  close[6].addEventListener('click', (e) => {

    popup6.style.display = "none";

  })

  close[7].addEventListener('click', (e) => {

    popup7.style.display = "none";

  })

  close[8].addEventListener('click', (e) => {

    popup8.style.display = "none";

  })

  close[9].addEventListener('click', (e) => {

    popup9.style.display = "none";

  })

  close[10].addEventListener('click', (e) => {

    popup10.style.display = "none";

  })

  close[11].addEventListener('click', (e) => {

    popup11.style.display = "none";

  })


window.onclick = function(event) {
    if (event.target == popup0) {
        popup0.style.display = "none";

      } else if (event.target == popup1) {
      popup1.style.display = "none";

    }else if (event.target == popup2) {
      popup2.style.display = "none";

    } else if (event.target == popup3) {
      popup3.style.display = "none";

    } else if (event.target == popup4) {
      popup4.style.display = "none";

    } else if (event.target == popup5) {
      popup5.style.display = "none";

    } else if (event.target == popup6) {
      popup6.style.display = "none";

    } else if (event.target == popup7) {
      popup7.style.display = "none";

    } else if (event.target == popup8) {
      popup8.style.display = "none";

    } else if (event.target == popup9) {
      popup9.style.display = "none";

    } else if (event.target == popup10) {
      popup10.style.display = "none";

    } else if (event.target == popup11) {
      popup11.style.display = "none";

    }
  
  
  } 
