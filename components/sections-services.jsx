import Image from 'next/image'
import photo3 from '../src/img/photo-3.jpg';

export default function SectionsServices() {
  return (
    <div className="bg-stone-50 pt-10">
      {/* <h2 className="text-4xl font-semibold text-center p-28">TITLE</h2> */}
      <div className="p-5 text-black ">
        <div className="md:flex">
          <span className="w-4/5 order-2">
            <Image className="rounded h-3/4" src={photo3} alt='photo1'/>
          </span>
          <div className=" w-full max-w-screen-xl text-start p-2 py-12 pb-20 md:w-11/12 md:p-10 md:pr-20  order-1">
            <h3 className="text-4xl pb-5 font-semibold lg:text-5xl">Minimal and clean</h3>
            <p className="text-xl leading-7">Everything you need, nothing you. 
              This bag has the simple, contemporary design that enables 
              you to tell everyone you know about how essentialism 
              is the only rational way to live life.
            </p>
          </div>
        </div>
        <div className="md:flex">
          <span className="w-4/5 order-2">
            <Image className="rounded h-3/4" src={photo3} alt='photo1'/>
          </span>
          <div className="w-full max-w-screen-xl text-start p-2 py-12 pb-20 md:w-11/12 md:p-10 md:pr-20  order-1">
            <h3 className="text-4xl  pb-5 font-semibold lg:text-5xl">Adventure-ready</h3>
            <p className="text-xl	leading-7">The Drawstring Canister is water 
              and tear resistant with durable canvas construction. 
              This bag holds up to the demands of daily use while 
              keeping your snacks secure.
            </p>
          </div>
        </div>
        <div className="md:flex">
          <span className="w-4/5 order-2">
            <Image className="rounded h-3/4" src={photo3} alt='photo1'/>
          </span>
          <div className="w-full max-w-screen-xl text-start p-2 py-12 pb-20 md:w-11/12 md:p-10 md:pr-20 order-1">
            <h3 className="text-4xl pb-5 font-semibold lg:text-5xl">Organized</h3>
            <p className="text-md	leading-7 md:text-xl ">
                Never lose your snacks again with our patent-pending 
                snack stash pocket system. With dedicated pouches for each
                of your snacking needs, the Drawstring Canister unlocks new levels
                of efficiency and convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
