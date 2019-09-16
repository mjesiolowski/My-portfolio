class Portfolio {
   constructor() {
      this.header = document.querySelector('.header')
      this.intro = document.querySelector('.intro')
      this.projects = document.querySelector('.projects')
      this.technology = document.querySelector('.technology')
      this.contact = document.querySelector('.contact')

      this.footerDate = document.querySelector('.footer__date')

      this.nav = document.querySelector('.nav')
      this.navDesktop = document.querySelector('.nav-desktop')
      this.navLinks = document.querySelectorAll('.nav__link')
      this.navDesktopLinks = document.querySelectorAll('.nav-desktop__link')
      this.navArrow = document.querySelector('.nav-arrow')
      this.burger = document.querySelector('.burger')
   }

   init() {
      this.setFooterDate()


      this.burger.addEventListener('click', () => this.handleDynamicClasses(this.burger, 'toggle', 'burger--active'))
      this.burger.addEventListener('click', () => this.handleDynamicClasses(this.nav, 'toggle', 'isActive'))
      this.navLinks.forEach(link => link.addEventListener('click', (e) => this.handleDynamicClasses(this.nav, 'remove', 'isActive')))
      this.navLinks.forEach(link => link.addEventListener('click', (e) => this.handleDynamicClasses(this.burger, 'remove', 'burger--active')))

      document.addEventListener('scroll', () => {
         const scrollTreshold = 200
         const mobileBreakpoint = 650

         this.handleElementsVisibility(mobileBreakpoint)
         this.removeHighlightedClassFromNav()
         this.handleNavHighlight(window.scrollY >= this.intro.offsetTop && window.scrollY < this.projects.offsetTop - scrollTreshold, 1)
         this.handleNavHighlight(window.scrollY >= this.projects.offsetTop && window.scrollY < this.technology.offsetTop - scrollTreshold, 0)
         this.handleNavHighlight(window.scrollY >= this.technology.offsetTop && window.scrollY < this.contact.offsetTop - scrollTreshold, 2)
         this.handleNavHighlight(window.scrollY >= this.contact.offsetTop - scrollTreshold, 3)
      })

      window.addEventListener('resize', (e) => {
         if (e.target.innerWidth > 650) {
            this.handleDynamicClasses(this.nav, 'remove', 'isActive')
            this.handleDynamicClasses(this.burger, 'remove', 'burger--active')
         }
      })
   }

   handleElementsVisibility(mobileBreakpoint) {
      if (this.header.getBoundingClientRect().bottom < 0) {
         this.navArrow.style.opacity = 1
      }

      if (this.header.getBoundingClientRect().bottom >= 0) {
         this.navArrow.style.opacity = 0
         this.navDesktop.style.transform = 'translateY(-100%)'
      }

      if (window.innerWidth <= mobileBreakpoint) {
         this.navDesktop.style.transform = 'translateY(-100%)'
      }

      if (this.header.getBoundingClientRect().bottom < 0 && window.innerWidth > mobileBreakpoint) {
         this.navDesktop.style.transform = 'translateY(0)'
      }
   }

   handleNavHighlight(condition, linkPosition) {
      if (condition) {
         this.navDesktopLinks[linkPosition].classList.add('nav__link--highlighted')
      }
   }

   removeHighlightedClassFromNav() {
      this.navDesktopLinks.forEach(navLink => navLink.classList.remove('nav__link--highlighted'))
   }

   handleDynamicClasses(element, action, className) {
      element.classList[action](className)
   }

   setFooterDate() {
      this.footerDate.textContent = new Date().getFullYear()
   }
}

const app = new Portfolio()
app.init()