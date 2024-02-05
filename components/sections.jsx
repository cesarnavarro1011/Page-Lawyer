import Image from 'next/image'
import photo from '../src/img/photo.png';

export default function Sections() {
  return (
    <div className="w-screen h-screen">
      <h2 className="text-4xl text-center p-10">TITLE</h2>
      <div className="p-5">
        <div className="flex">
          <span className="w-96 h-96">
            <Image className="w-96 h-96" src={photo} alt='photo1'/>
          </span>
          <div className="w-96 text-start">
            <h3 className="text-2xl py-10">Minimal and clean</h3>
            <p className="">Everything you need, nothing you. 
              This bag has the simple, contemporary design that enables 
              you to tell everyone you know about how essentialism 
              is the only rational way to live life.
            </p>
          </div>
        </div>
        <div className="w-screen flex">
          <span className="w-96 order-2">
            <Image className="w-96 h-96" src={photo} alt='photo1'/>
          </span>
          <div className="w-96 text-end order-1">
            <h3 className="text-2xl py-10">Adventure-ready</h3>
            <p className="">The Drawstring Canister is water 
              and tear resistant with durable canvas construction. 
              This bag holds up to the demands of daily use while 
              keeping your snacks secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
