import React, {useState} from 'react';

const MobileMenu = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <section className="mobile">
            <header className="mobile-menu">
                <a href="#" className="open-menu" onClick={() => setIsHidden(false)}/>
                <nav className={isHidden ? "hide" : null}>
                    <ul>
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">Zespół</a></li>
                        <li><a href="#">Produkty</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                    <a href="#" className="close-menu" onClick={() => setIsHidden(true)}>Zamknij menu</a>
                </nav>
            </header>
        </section>

    );
};

export default MobileMenu;