import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Medcontent1(){

    return(
        <>
      <div className="grid gap-4 col-start-3 col-end-2 row-start-2 sm:mb-6 sm:grid-cols-3 lg:gap-6 lg:col-start-2 lg:row-end-3 lg:row-span-6 lg:mb-0 ">
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://a-static.besthdwallpaper.com/cute-doggie-dogs-puppies-wallpaper-1280x960-84105_20.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   DOGS
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
   The most loyal and friendly animal in existence.
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://webneel.com/wallpaper/sites/default/files/images/05-2013/two%20cute%20cats%20wallpaper.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      CATS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Adorable and cute , never a dull moment with them.
    </p>
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://www.teahub.io/photos/full/164-1643794_cute-love-bird.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      BIRDS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    The presence of a single bird can change everything for one who appreciates them.
    </p>
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://wallpaper.dog/large/20572243.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   AQUATIC ANIMALS
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
  Live in their little world and they are the best listener. 
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://a-static.besthdwallpaper.com/cute-doggie-dogs-puppies-wallpaper-1280x960-84105_20.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   RABBIT
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
   The most loyal and friendly animal in existence.
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://a-static.besthdwallpaper.com/cute-doggie-dogs-puppies-wallpaper-1280x960-84105_20.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   OTHERS
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
   The most loyal and friendly animal in existence.
 </p>
</Card>
  </div>
</div>

       
        
        </>
    )
}