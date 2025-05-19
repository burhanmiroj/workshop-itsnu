// HANDLE MENU ACTIVE PAGE
customElements.whenDefined('main-sidebar').then(() => {
    const url = window.location;
    const thisPage = url.pathname.split('/').pop().replace(/\.html$/, '');
    
    let sidebarMenus = document.querySelectorAll('.sidebar-menu');
    
    sidebarMenus.forEach(link => {
        const activeKey = link.getAttribute('data-menu-active');

        if (thisPage === activeKey) {
            link.classList.add('menu-active')
        }
    });
});