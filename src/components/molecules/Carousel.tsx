import { CarouselItem } from "../atoms/CarouselItem";
export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className="carousel">
      {images.map((img, index) => (
        <CarouselItem key={index} src={img} />
      ))}
    </div>
  );
};