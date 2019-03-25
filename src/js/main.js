portfolioButtons = document.querySelectorAll('.portfolio button')

portfolioButtons.forEach(button => {
   button.addEventListener('mousedown', () => {
      button.style.lineHeight = "5rem"
   })
})