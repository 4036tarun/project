import { Carousel } from "flowbite-react";

export default function Mycarousel1(){

    return(
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-10">
  <Carousel>
    <img
      src="https://www.hdwallpapers.in/download/bunch_of_brown_white_black_puppy_dogs_in_blue_background_hd_dog-HD.jpg"
      alt="..."
    />
    <img
      src="https://www.hdwallpapers.in/download/nice_picture_of_cats_hd_cat-1920x1080.jpg"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/6106518/pexels-photo-6106518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/2289387/pexels-photo-2289387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="..."
    />
    <img
      src="https://squeaksandnibbles.com/wp-content/uploads/2018/03/rabbit-colors-header.jpg"
      alt="..."
    />
  </Carousel>
</div>

        </>
    )
}