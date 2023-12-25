import React from "react";
import "./home.css";
import Product from "../Products/Product";
export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51AxBGnRSeL._SX1500_.jpg"
          alt=""
        />
      </div>{" "}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Brother Genuine Cartridge TN760 High Yield Black Toner,1 Pack"
          price={97.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71n5vk4vB-L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="23445930"
          title="Acer Aspire 5 A515-56-36UT, 15.6' Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB ..."
          price={389.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71233PTgAjL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="3254354345"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable ..."
          price={58.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1658965"
          title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
          price={12.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="98465165"
          title="Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
          price={62.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="1984610"
          title="Nintendo Switch – OLED Model w/ White Joy-Con"
          price={158.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51YLbkYOhlL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
};
