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
 GOVT. PET HOSPITAL
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
   Address: Shastri Market Rd, Sector 22D, Sector 22, Chandigarh, 160022
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="himage/Screenshot 2023-04-14 115604.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Government Veterinary Hospital
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Address: HBC, Dhanas, Chandigarh, 160014
 </p>
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="himage/Screenshot 2023-04-13 134722.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Tri-City Kennels-Pet Hotel
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Address: H.B. NO 375, Kochar Farms, Shastri Nagar Rajiv Gandhi Technology Park, Chandigarh 160101
 </p>
  </Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="himage/Screenshot 2023-04-14 120350.png"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 LakeSyde Veterinary Clinic & Laser Surgery Center
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
 Address: Shop No - 106,Inner Market, Sector 7-C, Chandigarh, 160019
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="himage/Screenshot 2023-04-14 120745.png"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 'Royal K9' Pet Clinic
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
 Address: no 134-135 Phase, Booth, 5, Mohali Stadium Rd, Sahibzada Ajit Singh Nagar, Punjab 160059
 </p>
</Card>
  </div>
  <div className="max-w-sm">
  <Card
 
 imgAlt="Meaningful alt text for an image that is not purely decorative"
 imgSrc="himage/Screenshot 2023-04-13 133959.png"
>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 Get-Well Pet Clinic
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
 Address:#1459, Sector 44, Chandigarh, 160044
 </p>
</Card>
  </div>
</div>

       
        
        </>
    )
}