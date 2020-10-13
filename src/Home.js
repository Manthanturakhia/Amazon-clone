import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home__row">
                <Product
                    id = "1905"
                    title = "OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand)"
                    price = {62899}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71EO3uGdJbL._SL1500_.jpg"
                />
                <Product
                    id = "1900"
                    title = "Apple iPhone 11 (128GB) - Black"
                    price = {71600}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "1901"
                    title = "TCL 108 cm (43 inches)  AI 4K Ultra HD Certified Android Smart LED TV 43P715 (Sliver) (2020 Model)"
                    price = {28899}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61BCa2dM96L._SL1500_.jpg"
                />
                <Product
                    id = "1912"
                    title = "HP Pavilion x360 Touchscreen 2-in-1 FHD 14-inch Laptop (10th Gen Core i3-10110U/8GB/512GB SSD/Win 10/MS Office/Mineral Silver/1.58 kg), 14-dh1178tu"
                    price = {50429}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51eEcrzRxeL._SL1080_.jpg"
                />
                <Product
                    id = "1234"
                    title = "Fossil Men's Gen 4 Explorist HR Heart Rate Stainless Steel and Leather Touchscreen Smartwatch, Color: Brown (Model: FTW4016)"
                    price = {11498}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81oFNtgsHvL._UL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "1111"
                    title = "Furny Algeria 6 Seater L-Shaped Corner Sofa Set in Fabric & Leatherette (Dark Grey-Black)"
                    price = {26773}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61oFkEyPWUL._SL1100_.jpg"
                />
                 <Product
                    id = "1900"
                    title = "Apple iPhone 11 (128GB) - Black"
                    price = {71600}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                />
            
            </div>

        </div>

    )
}

export default Home
