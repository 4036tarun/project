import { Label, Textarea } from "flowbite-react";


export default function Comment1(){

    return(
        <>
        <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your message"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Leave a comment..."
    required={true}
    rows={4}
  />
</div>


       
        
        </>
    )
}