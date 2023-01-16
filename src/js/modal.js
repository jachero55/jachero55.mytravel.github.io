class Modal {
  constructor() {
    console.log("Modal Created!!!")
    this.closeModal();
  }

  openModal=()=>{
    document.querySelector('.modal-overlay').style.display = 'block'
    console.log("Open Modal")
  }

  closeModal=()=>{
    document.querySelector('.close-modal').addEventListener('click', e =>{
      document.querySelector('.modal-overlay').style.display = 'none'
    })
  }
}