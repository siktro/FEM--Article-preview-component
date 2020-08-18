const btnShare = document.getElementById('btn-share')
const menuShare = document.getElementById('share-menu')

const btnClassName = 'card__share--active'
const shareClassName = 'card__share-menu--hidden'

const isMenuVisible = () => !menuShare.classList.contains(shareClassName)

btnShare.addEventListener('click', () => {
  event.stopImmediatePropagation()
  // click away thing
  const clickAwayListener = (event) => {
    if (!menuShare.contains(event.target) && isMenuVisible()) {
      console.log('switched')
      toggleVisibility()
      document.removeEventListener('click', clickAwayListener)
    }
  }

  const toggleVisibility = () => {
    btnShare.classList.toggle(btnClassName)
    menuShare.classList.toggle(shareClassName)
  }

  toggleVisibility()
  document.addEventListener('click', clickAwayListener)
})
