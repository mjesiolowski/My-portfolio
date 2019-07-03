const Portfolio = {
   init() {
      this.desktopBreakpoint = 1000
      this.projects = document.querySelectorAll('.projects__container')

      this.toggleVisibility = (e) => {
         if (window.innerWidth < this.desktopBreakpoint && e.target.nodeName === 'DIV') {
            const children = [...e.target.children]
            children.forEach(child => child.classList.toggle('not-visible'))
            e.target.classList.toggle('backgroundToggler')
         }
      }

      this.projects.forEach(project => project.addEventListener('click', this.toggleVisibility))
   }
}


Portfolio.init()