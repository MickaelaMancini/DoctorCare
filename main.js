onScroll()
window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showbackToTopButton()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

// ----------------------------------------------------------------
function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // lógica para verficar se a seção passou da linha alvo
  // DADOS NECESSÁRIOS
  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeigth = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // as informações dos dados e da lógica
  //console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)

  // a lógica para verficar se a base está abaixo da linha alvo
  // OS DADOS NECESSÁRIOS
  // a seção termina em...
  const sectionEndsAt = sectionTop + sectionHeigth

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // as informações dos dados e da lógica
  //console.log('a base da seção passou da linha?', sectionEndPassedTargetline)

  // limites da seção
  const sectionBoudaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  // "consulta" o html
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // as informações dos dados e da lógica
  // console.log(sectionBoudaries)

  // remove e adiciona a marcação da seção
  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}
// ----------------------------------------------------------------

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showbackToTopButton() {
  if (scrollY > 850) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services,
  #services .header,
  #services .card,
  #about,
  #about header,
  #about .content`
)
