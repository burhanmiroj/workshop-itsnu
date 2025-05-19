class MainSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside class="sidebar">
                <!-- SINGLE GROUP MENU -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="line-md:star-twotone" width="20" height="20"></iconify-icon>
                        </div>
                        <h1>Introduction</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="/getting-started.html" data-menu-active="getting-started" class="sidebar-menu">Getting Started</a>
                        </li>
                        <li>
                            <a href="/project-goals.html" data-menu-active="project-goals" class="sidebar-menu">Project Goals</a>
                        </li>
                        <li>
                            <a href="/tools-requirement.html" data-menu-active="tools-requirement" class="sidebar-menu">Tools Requirement</a>
                        </li>
                    </ul>
                </div>
                <!-- HTML Group -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="akar-icons:html-fill" width="20" height="20"></iconify-icon>
                        </div>
                        <h1>Hyper Text Markup Language</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="/pages/html/getting-started-html.html" data-menu-active="getting-started-html" class="sidebar-menu">Getting Started</a>
                        </li>
                        <li>
                            <a href="/pages/html/digging-deeper-html.html" data-menu-active="digging-deeper-html" class="sidebar-menu">Digging Deeper HTML</a>
                        </li>
                        <li>
                            <a href="/pages/html/resource-belajar-html.html" data-menu-active="resource-belajar-html" class="sidebar-menu">Resource Belajar</a>
                        </li>
                    </ul>
                </div>
                <!-- CSS Group -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="akar-icons:css-fill" width="20" height="20"></iconify-icon>
                        </div>
                        <h1>Cascading Style Sheet</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="" class="sidebar-menu">Pengertian</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Versi</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Sintaks</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Class & ID</a>
                        </li>
                    </ul>
                </div>
                <!-- JS Group -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="ri:javascript-fill" width="22" height="22"></iconify-icon>
                        </div>
                        <h1>JavaScript</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="" class="sidebar-menu">Pengertian</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Versi</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Sintaks</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Class & ID</a>
                        </li>
                    </ul>
                </div>
                <!-- VCS Group -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="mdi:github" width="22" height="22"></iconify-icon>
                        </div>
                        <h1>Version Control System</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="" class="sidebar-menu">Pengertian</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Versi</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Sintaks</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Class & ID</a>
                        </li>
                    </ul>
                </div>
                <!-- Deployment Group -->
                <div class="single-group-menu">
                    <div class="sidebar-group-title">
                        <div class="icon">
                            <iconify-icon icon="teenyicons:netlify-outline" width="20" height="20"></iconify-icon>
                        </div>
                        <h1>Deployment</h1>
                    </div>
                    <ul>
                        <li>
                            <a href="" class="sidebar-menu">Pengertian</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Versi</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Sintaks</a>
                        </li>
                        <li>
                            <a href="" class="sidebar-menu">Class & ID</a>
                        </li>
                    </ul>
                </div>
            </aside>
        `;
    }
}

customElements.define('main-sidebar', MainSidebar);