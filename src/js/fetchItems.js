class FetchItems {
  constructor() {
    console.log("Fetch Items Created!!!")
    this.getItems();
    this.ui = new Ui()
    this.filterB = new FilterButtons();
    this.inputSearch = new SearchBar();
  }

  getItems = async ()=>{
    try {
      let response =  await fetch("https://raw.githubusercontent.com/jachero55/jachero55.photography.github.io/main/data/data.json")
      let data = await response.json();
      let photos = data.images;
      this.ui.displayPhotos(photos);
      this.filterB.filterBtn(photos)
      this.inputSearch.searchItems(photos);
      console.log("YAYAYAYAYA WE GOT THE PHOTOS", photos);
    }catch (e) {
      console.log("Something went wrong!!!")
    }
  }
}