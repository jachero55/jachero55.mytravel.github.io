class Nav {
  constructor() {
    console.log("Nav Created!!!")
    this.openMenu();
    this.closeMenu();
  }
  openMenu =()=> {
    let menuOpen = document.querySelector('.open-menu');
    let ul = document.querySelector('ul');
    menuOpen.addEventListener('click', e => {
      ul.style.left = '0'
    })
  }

  closeMenu =()=> {
    let menuClose = document.querySelector('.close-menu');
    let ul = document.querySelector('ul');
    menuClose.addEventListener('click', e => {
      ul.style.left = '-260px'
    })
  }
}