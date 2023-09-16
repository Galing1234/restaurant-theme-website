document.addEventListener('DOMContentLoaded', () => {
  const aboutButton = document.querySelector('.about-button') ;
  const menuButton = document.querySelector('.menu-button') ;
  const mainMenuButton = document.querySelector('.menu-view-button') ;
  const locationsButton = document.querySelector('.location-button') ;
  const mainLocationsButton = document.querySelector('.location-info-button') ;
  const dailySpecialsButton = document.querySelector('.daily-specials-button') ;
  const mainDailySpecialsButton = document.querySelector('.daily-specials-info-button') ;
  const orderButton = document.querySelector('.order-button') ;
  const mainOrderButton = document.querySelector('.order-info-button') ;
  const contactButton = document.querySelector('.contact-button') ;
  const mainContactButton = document.querySelector('.contact-info-button') ;

  if (aboutButton) {
    aboutButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery.html' ;
    }) ;
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-menu.html' ;
    }) ;
  }

  if (mainMenuButton) {
    mainMenuButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-menu.html' ;
    }) ;
  }

  if (locationsButton) {
    locationsButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-locations.html' ;
    }) ;
  }

  if (mainLocationsButton) {
    mainLocationsButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-locations.html' ;
    }) ;
  }

  if (dailySpecialsButton) {
    dailySpecialsButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-daily-specials.html' ;
    }) ;
  }

  if (mainDailySpecialsButton) {
    mainDailySpecialsButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-daily-specials.html' ;
    }) ;
  }

  if (orderButton) {
    orderButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-order.html' ;
    }) ;
  }

  if (mainOrderButton) {
    mainOrderButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-order.html' ;
    }) ;
  }

  if (contactButton) {
    contactButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-contact.html' ;
    }) ;
  }

  if (mainContactButton) {
    mainContactButton.addEventListener('click', () => {
      location.href = 'sarahs-bakery-contact.html' ;
    }) ;
  }

  /*
  const middleSection = document.querySelector('.middle-section') 
  const chefsHatIcon = document.querySelector('.chefs-hat-icon') ;

  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      addElement(chefsHatIcon, middleSection.firstChild, middleSection) ;
    } else if (windowWidth <= 1000) {
      removeElement(chefsHatIcon, middleSection) ;
    } 
  });

  function addElement(element, position, parent) {
    if (!parent.contains(element)) {
      // Insert it at the beginning of the div
      parent.insertBefore(element, position) ;
    }
  }

  function removeElement(element, parent) {
    if (parent.contains(element)) {
      parent.removeChild(element);
    }
  }*/
}) ;