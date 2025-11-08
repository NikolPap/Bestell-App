function getMenuTemplate(i) {
    return ` <div class="card-body" >
              <img
              src="${menu[i].src}"
              class="card-img-top menu-img"
              alt="${menu[i].alt}"
            />
              <h5 class="card-title">${menu[i].title}</h5>
         
            <ul id="${i}" class="list-group list-group-flush">
            </ul>
          </div>`
}

function getItemTemplate(i,index) {
    return `
              <li class="list-group-item">
                <div class="menu_info">
                  <h5>${menu[i].items[index].name}</h5>
                  <p>${menu[i].items[index].description}</p>
                  <p class="card_menu_preis">${menu[i].items[index].price} &euro;</p>
                </div>
               <div class="plus_menu"><img class="plus_image" src="./assets/icons/plus.png" alt="ein plus image"></div></li>`
}