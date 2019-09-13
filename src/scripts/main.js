const Portfolio = {
   init() {
      this.desktopBreakpoint = 1000
      this.projects = document.querySelectorAll('.projects__container')
      this.footerDate = document.querySelector('.footer__date')
      this.header = document.querySelector('.header')
      this.projects = document.querySelector('.projects')
      this.navArrow = document.querySelector('.nav-arrow')
      this.nav = document.querySelector('.nav')
      this.navLinks = document.querySelectorAll('.nav__link')

      document.addEventListener('scroll', () => {
         const safetyTreshold = 10

         if (this.header.getBoundingClientRect().bottom < 0) {
            this.navArrow.style.opacity = 1
            this.nav.style.opacity = 1
         } else {
            this.navArrow.style.opacity = 0
            this.nav.style.opacity = 0
         }

         this.removeActiveClassFromNav()

         // this.handleNavHighlight(window.scrollY < this.projects.offsetTop, 0)
         // console.log(window.scrollY, header.offsetTop)
         // this.handleMenuHighlight(window.scrollY >= catalog.offsetTop && window.scrollY < events.offsetTop, 1)
         // this.handleMenuHighlight(window.scrollY >= events.offsetTop && window.scrollY < about.offsetTop, 2)
         // this.handleMenuHighlight(window.scrollY >= about.offsetTop && window.scrollY < contact.offsetTop - (contact.offsetTop / safetyTreshold), 3)
         // this.handleMenuHighlight(window.scrollY >= contact.offsetTop - (contact.offsetTop / safetyTreshold), 4)

      })

      // this.projects.forEach(project => project.addEventListener('click', (e) => this.toggleVisibility(e, this)))

      this.setFooterDate()
   },

   handleNavHighlight(condition, linkPosition) {
      if (condition) {
         this.navLinks[linkPosition].classList.add('nav__link--active')
      }
   },

   removeActiveClassFromNav() {
      this.navLinks.forEach(navLink => navLink.classList.remove('nav__link--active'))
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