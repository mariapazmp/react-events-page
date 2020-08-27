import React from "react";

function Header() {
    return(
        <header>
            <div className="main-container">
                <div className="header__options">
                    <div className="header__logo">
                        <img src="https://vanhack.com/platform/7fefa6b1dc9802203f976c49b68a47bf.svg" alt="Vanhack Logo" />
                    </div>
                    <nav>
                        <a href="">Find a Job</a>
                        <a href="" className="active details-link">Events</a>
                        <a href="">Premium</a>
                        <a href="">Blog</a>
                    </nav>
                </div>
                <div className="header__user-account">
                    <a href=""><img src="https://vanhackblobstorageprod.blob.core.windows.net/img/User/20e9a5ac-9761-4d8e-a5de-a31a31056857.jpg" alt="user-avatar"/></a>
                </div>
            </div>
        </header>
    )
}

export default Header;