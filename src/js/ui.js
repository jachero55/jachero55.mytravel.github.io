class Ui {
  constructor() {
    console.log("Ui Created!!!")
    this.modal = new Modal();
  }

  // Get all the items from the data
  displayPhotos = async (items)=>{
    let allPhotos = [];
    this.allPhotos = items;
    allPhotos = items;
    // this.filterBtn.filterBtn(this.allPhotos)
    
    let photosContainer = document.querySelector(".category-photos .myGallery");
    let results = '';
    await items.forEach(item => {
          results += `
                  <div class="gallery-card">
                          <img data-id=${item.id} src=${item.image} />
                      <div class="card-details">
                          <h3>${item.title}</h3>
                      </div>
                  </div>
                `
        photosContainer.innerHTML = results;
        $('.gallery-card').slice(0, 12).show();
    });
    this.loadMoreItems();
    this.clickedPhoto();
  }

  // loading more items
  loadMoreItems =()=>{
    $('.loadMore').on('click', function() {
      $('.gallery-card:hidden').slice(0, 4).show();
      if($('.gallery-card:hidden').length == 0) {
        $('.loadMore').fadeOut();
      }
    })
  }

  // get clicked image
  clickedPhoto=()=>{
    let imageClicked = [...document.querySelectorAll('.gallery-card img')]
    imageClicked.forEach((img)=> {
      img.addEventListener('click', e => {
        const photoId = e.target.dataset.id;
        this.modal.openModal();
        this.modalDisplay(photoId)
      })
    })
  }

  // Populate modal with clicked image
  modalDisplay= async (photoId)=>{
    let overlay = document.querySelector('.modal');
    const myPhoto = await this.allPhotos.find(myPhoto => myPhoto.id == photoId);
    const result = `
                    <img src=${myPhoto.image}/>
                    <div class="modal-details-container">
                      <h3>${myPhoto.details}</h3>
                      <h4>Photo by: ${myPhoto.photographer}</h4>
                      <a target="_blank" href=${myPhoto.link}>${myPhoto.link}</a>
                    </div>
                  `
                  console.log('rrrrrr', myPhoto.image)
        overlay.innerHTML = result;
  }
}