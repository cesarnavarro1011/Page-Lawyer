import React from 'react'
import img1 from '../src/img/img_collage_01.webp';
import img2 from '../src/img/img_collage_03.webp';
import Image from 'next/image';

export default function SectionsServices2() {
  return (
    <div  class="_none">
      <div class="mt-8 md:mb-8 md:p-10">
        <div class="sm:flex lg:justify-between">
          <div class="px-5 sm:w-11/12 sm:px-0">
            <h2 class="pr-10 text-2xl font-medium md:w-11/12 sm:text-5xl md:pr-0 md:pb-5">Haz consultas ilimitadas sobre cualquier asunto legal</h2>
            <p class="py-5 text-md sm:text-xl md:pr-16">Elijas el plan que elijas podrás hacer consultas ilimitadas sobre todas estas áreas legales: consumo, vivienda, hijos, trabajo, internet, fiscal, conductor, familia.</p>
            <p class="pb-5 text-md sm:text-xl md:pr-16">Nuestros abogados a tu lado, cuando quieras, todas las veces que necesites.</p>
          </div>
          <div class="sm:w-8/12 flex justify-end">
            <Image class="w-8/12 z-1 sm:w-11/12" alt="Texto imagen Collage 01" height="600" loading="lazy" src={img1} width="445" />
          </div>
        </div>
        <div class="relative -top-20 sm:flex sm:items-center sm:-top-15">
          <div class="sm:w-10/12">
            <Image class="w-4/6 z-2 sm:w-4/5" alt="Texto imagen Collage 01" height="600" loading="lazy" src={img2} width="445" />
          </div>
          <div class="p-5 md:w-11/12 sm:p-0 sm:pt-16">
            <h2 class="pb-5 text-2xl font-medium md:w-11/12 sm:text-5xl">Cuenta con más de 800 abogados y una red de 340 despachos</h2>
            <p class="py-2 text-md md:text-xl">Llevamos 20 años defendiendo a miles de personas como tú. Te acompañamos desde el primer momento y nos encargamos de todo.</p>
            <p class="pt-2 text-md md:text-xl">Legaltech española líder en asesoramiento jurídico para familias, autónomos y pymes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
