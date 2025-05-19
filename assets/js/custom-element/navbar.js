class MainNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <!-- LOGO -->
                <div class="logo">
                    <a href="">
                        <img src="/assets/images/main-logo.png" alt="MAIN LOGO ITSNU HCM" />
                    </a>
                </div>
                <!-- MAIN NAV -->
                <ul class="right-sosmed">
                    <li>
                        <a href="#">
                            <iconify-icon icon="mdi:github" width="20" height="20"></iconify-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <iconify-icon icon="mdi:linkedin" width="20" height="20"></iconify-icon>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('main-navbar', MainNavbar);