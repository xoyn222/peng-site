import React from 'react';
import {assets} from "../../assets/assets.js";
import './Header.css';

const Header = () => {
    // Пример функций для действий при клике на элементы
    const handleMenuClick = () => {
        console.log('Меню нажато');
        // Логика открытия бокового меню
    };

    const handleLogoClick = () => {
        console.log('Логотип нажат');
        // Логика перехода на главную страницу
    };

    const handleSearchClick = () => {
        console.log('Поиск нажат');
        // Логика открытия поиска
    };

    const handleCartClick = () => {
        console.log('Корзина нажата');
        // Логика открытия корзины
    };

    return (
        <div className="header">
            <div className="left-icons" onClick={handleMenuClick}>
                <div className="menu-icon">
                    <img src={assets.menu_icon} alt=''/>
                </div> {/* Иконка меню */}
            </div>
            <div className="logo" onClick={handleLogoClick}>
                {/* Логотип peng */}
                <div>
                    <img src={assets.bl} alt=''/>
                </div>
            </div>
            <div className="right-icons">
                <div className="search-icon" onClick={handleSearchClick}>
                    <img src={assets.search_icon} alt=''/>
                </div> {/* Иконка поиска */}
                <div className="cart-icon" onClick={handleCartClick}>
                    <img src={assets.shopping_cart} alt=''/>
                </div>
                {/* Иконка корзины */}
            </div>
        </div>
    );
};

export default Header;