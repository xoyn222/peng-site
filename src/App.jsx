import React from "react";
import Header from "./comp/Header/Header.jsx";
import Card from "./comp/Card/Card.jsx"; // Импортируем карточки товаров
import {assets} from "./assets/assets";
import "./App.css"
import Footer from "./comp/Footer/Footer";

const App = () => {
    // Массив с товарами
    const products = [
        {
            name: 'Спортивки "Джинсы"',
            price: '120',
            image: assets.jeans,
        },
        {
            name: 'Футболка "Рокки Бальбоа"',
            price: '20',
            image: assets.t_shirt,
        },
        {
            name: 'Лонгслив "Подшарил"',
            price: '40',
            image: assets.long,
        },
        {
            name: 'Xуди "Ахуительный тренд"',
            price: '60',
            image: assets.hood,
        },
    ];

    return (
        <>
            <Header />
            <div className="product-list">
                {products.map((product, index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default App;
