import { Button,Checkbox,Label,Modal, TextInput } from "flowbite-react";
import ButtonGroup from "flowbite-react/lib/esm/components/Button/ButtonGroup";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { useState } from "react";


export default function Mylogin() {
    const [modalstate,setmodalstate]=useState(false)
    const onClick=()=>{
setmodalstate(true)
    }
    const onClose=()=>{
setmodalstate(false)
    }
  return (
    <>
    
  <Button onClick={onClick}>
    Toggle modal
  </Button>
  <Modal
    show={modalstate}
    size="md"
    popup={true}
    onClose={onClose}
  >
    <ModalHeader />
    <ModalBody>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your email"
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@company.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          <a
            href="/modal"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <div className="w-full">
          <Button>
            Log in to your account
          </Button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? 
          <a
            href="/modal"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </a>
        </div>
      </div>
    </ModalBody>
  </Modal>
  <ButtonGroup>
    <Button gradientDuoTone="greenToBlue">
      Profile
    </Button>
    <Button gradientDuoTone="greenToBlue">
      Settings
    </Button>
    <Button gradientDuoTone="greenToBlue">
      Messages
    </Button>
  </ButtonGroup>

    </>
  )
}
