export const CarouselItem = ({ src }: { src: string }) => (
  <div className="carousel-item">
    <img src={src} className="carousel-img" alt="Product" />
  </div>
);