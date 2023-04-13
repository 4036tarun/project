import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Medcontent1(){

    return(
        <>
      <div className="grid gap-4 col-start-3 col-end-2 row-start-2 sm:mb-6 sm:grid-cols-3 lg:gap-6 lg:col-start-2 lg:row-end-3 lg:row-span-6 lg:mb-0 ">
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="himage/Screenshot 2023-04-13 133339.png"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 Address: Shastri Market Rd, Sector 22D, Sector 22, Chandigarh, 160022
 </h5>
 {/* <p className="font-normal text-gray-700 dark:text-gray-400">
   The most loyal and friendly animal in existence.
 </p> */}
</Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://webneel.com/wallpaper/sites/default/files/images/05-2013/two%20cute%20cats%20wallpaper.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Address: HBC, Dhanas, Chandigarh, 160014
    </h5>
    
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="himage/Screenshot 2023-04-13 134722.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Address: H.B. NO 375, Kochar Farms, Shastri Nagar Rajiv Gandhi Technology Park, Chandigarh 160101
    </h5>
    
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://wallpaper.dog/large/20572243.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 Address: Shop No - 106,Inner Market, Sector 7-C, Chandigarh, 160019
 </h5>
 
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="https://a-static.besthdwallpaper.com/cute-doggie-dogs-puppies-wallpaper-1280x960-84105_20.jpg"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 Address: no 134-135 Phase, Booth, 5, Mohali Stadium Rd, Sahibzada Ajit Singh Nagar, Punjab 160059
 </h5>
 
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="himage/Screenshot 2023-04-13 133959.png"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 Address:Get-Well Pet Clinic, #1459, Sector 44, Chandigarh, 160044
 </h5>

</Card>
  </div>
</div>

       
        
        </>
    )
}