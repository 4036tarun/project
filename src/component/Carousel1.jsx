import { Carousel } from "flowbite-react";

export default function Mycarousel1(){

    return(
        <>
         <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <img
      src="himage/cute_four_puppies_are_lying_down_on_a_greenfield_in_a_blur_background_hd_animals.jpg"
      alt="..."
    />
    <img
      src="himage/four_brown_black_white_cute_cat_kittens_in_white_background_hd_cute_cat.jpg"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/6106518/pexels-photo-6106518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="..."
    />
    <img
      src="himage/two_green_white_birds_are_perching_on_tree_branch_in_green_blur_bokeh_background_hd_green.jpg"
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