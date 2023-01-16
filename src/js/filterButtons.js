class FilterButtons {
  constructor() {
    console.log("Filter Buttons Created!!!")
    this.ui = new Ui();
  }
  filterBtn = (buttonType)=>{
    // create empty array to store the items
    let buttons = [];
    this.allButtons = buttonType;
    buttons = buttonType;
    console.log("All Buttons", buttons)
    const typeBtn = buttons.reduce((values, item) => {
      // Check if the values are in the array
      if(!values.includes(item.category)) {
        values.push(item.category)
      }
      return values;
    }, ['All']);
    // now add the buttons on the ui
    const allBtn = typeBtn.map((category)=> {
      return `
              <button class="filterBtn" data-id=${category}>${category}</button>
            `
    }).join('');
    const selectCategoryBtn = document.querySelector('.category-buttons');
    selectCategoryBtn.innerHTML = allBtn;

    // invoke the filterPhotosByCategory func
    this.filterPhotosByCategory(buttons);
  }

  // filter photos by category
  filterPhotosByCategory=(photos)=>{
    let filteredPhotos = [];
    this.allPhotos = photos;
    filteredPhotos = photos;
    console.log("FILTERED PHOTOS", filteredPhotos)
    // select the buttons from the DOM
    const photosBtn = [...document.querySelectorAll('.filterBtn')]
    photosBtn.forEach((btn)=> {
      btn.addEventListener('click', e =>{
        const category = e.target.dataset.id;
        const photoCategory = filteredPhotos.filter((photosFiltered)=>{
          if(photosFiltered.category === category) {
            return photosFiltered
          };
          
        });
        if(category == 'All') {
            this.ui.displayPhotos(photos);
        }else {
            this.ui.displayPhotos(photoCategory)
        }
      })
    })
  }
}