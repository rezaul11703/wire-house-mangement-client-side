import React from 'react';

const Banner = () => {
  return (
      <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://i.ibb.co/N6mzBw2/73802267-computer-shop-various-computer-parts-are-on-the-table-web-flat-vector-banner.webp"
        className="block w-full"
        alt="Wild Landscape"
      />
      
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://i.ibb.co/x8bTSbm/74106780-tienda-de-computadoras-varias-piezas-de-computadora-est-n-sobre-la-mesa-bandera-de-vector-p.webp"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://i.ibb.co/7XxTn3w/100264904-inventory-manager-smart-nice-man-holding-a-laptop-and-counting-boxes-in-the-warehouse.webp"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
    
  );
};

export default Banner;