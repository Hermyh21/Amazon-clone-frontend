import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  function truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }
  const truncatedTitle1 = truncateTitle(
    "HOWE Modern Sofa Couch, 24''Extra Deep Seat Sectional Sofa for Living Room, 85 inch Oversized Sofa",
    26 // set your desired maximum length
  );
  const truncatedTitle2 = truncateTitle(
    "Christmas Wreaths Decorations for Front Door Cordless Red and White Holiday Christmas Outdoor Tree",
    29 // set your desired maximum length
  );
  const truncatedTitle3 = truncateTitle(
    "Complexion Booster For A Glowing, Soft-Focus Look, Infused With Hyaluronic Acid, Vegan & Cruelty-Free",
    33 // set your desired maximum length
  );
  const truncatedTitle4 = truncateTitle(
    "Decorative Throw Pillow Cover Blue Eyed Husky Pillow Cases Double Sided Cushion Cover for Living Room",
    29 // set your desired maximum length
  );
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg"
          alt=""
        />
      </div>{" "}
      <div className="home__row">
        <Product
          id="12321341"
          title={truncatedTitle1}
          price={11.96}
          // rating={5}
          image="https://m.media-amazon.com/images/I/91Idk5RWu1L._AC_UL320_.jpg"
        />
        <Product
          id="12321341"
          title={truncatedTitle2}
          price={11.96}
          // rating={5}
          image="https://m.media-amazon.com/images/I/81rEMdz+dHL._AC_UL320_.jpg"
        />
        <Product
          id="12321341"
          title={truncatedTitle3}
          price={11.96}
          // rating={5}
          image="https://m.media-amazon.com/images/I/818fyWIQwtL._AC_UL320_.jpg"
        />
        <Product
          id="49538094"
          title={truncatedTitle4}
          price={11.96}
          // rating={4}
          image="https://m.media-amazon.com/images/I/81EWgtTkBkL._AC_UL320_.jpg"
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
}

export default Home;
