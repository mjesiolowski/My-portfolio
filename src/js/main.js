const Portfolio = {
   init() {
      this.desktopBreakpoint = 1000
      this.projects = document.querySelectorAll('.projects__container')
      this.footerDate = document.querySelector('.footer__date')

      this.projects.forEach(project => project.addEventListener('click', (e) => this.toggleVisibility(e, this)))

      this.setFooterDate()
   },

   toggleVisibility(e) {
      if (window.innerWidth < this.desktopBreakpoint && e.target.nodeName === 'DIV') {
         const children = [...e.target.children]
         children.forEach(child => child.classList.toggle('not-visible'))
         e.target.classList.toggle('backgroundToggler')
      }
   },

   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }
}

Portfolio.init()