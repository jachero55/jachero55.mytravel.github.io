class SearchBar {
  constructor() {
    console.log("Search Bar Created!!!")
    this.ui = new Ui();
  }
  searchItems= async (photos)=>{
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('keyup', async e =>{
      e.preventDefault();
      console.log(e.target.value)
      const searchString = e.target.value.toLowerCase();
      const filteredPhotos = await photos.filter((photo)=>{
        return photo.title.toLowerCase().includes(searchString);
      })
      this.ui.displayPhotos(filteredPhotos)
    })
  }
}