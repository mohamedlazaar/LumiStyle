import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../variants'; // Import the scroll animation function
import useScrollAnimation from '../UseScrollAnimation'; // Import the custom hook

function ClientsTestemonials() {
    const ref = useRef(null);
    const isVisible = useScrollAnimation(ref, { threshold: 0.2 }); 
  return (
    <motion.div ref={ref}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    variants={scrollAnimation()}
     className="py-5 ">
    <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div className="text-sm font-bold tracking-wider text-yellow-500 uppercase">Testimonials</div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight lg:text-4xl ">Voici ce que nos clients ont dit</h2>
        {/* <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">Testimonials is a great way to increase brand trust and awareness. Use this section to highlight your popular customers.</p> */}
    </div>
    <div className="container p-6 mx-auto mb-10 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-auto">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100800 md:px-14 rounded-2xl md:py-14 bg-gray-100">
                    <p className="text-lg leading-normal ">
                    Depuis que nous avons équipé nos chambres et suites avec les lampes de Lumi Style, nos clients ne cessent de complimenter l'atmosphère apaisante et l'éclairage raffiné. Lumi Style a su apporter une touche d'élégance unique à notre établissement.
                        </p>
                    <div className="flex items-center mt-8 space-x-3">
                        {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                        </div> */}
                        <div>
                            <div className="text-lg font-medium text-yellow-500">Testimonial 1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100  md:px-14 rounded-2xl md:py-14">
                    <p className="text-lg leading-normal"> 
                    Nous cherchions à moderniser l'éclairage de notre riad tout en conservant le charme traditionnel. Lumi Style a parfaitement répondu à nos attentes avec des lampes qui allient design contemporain et artisanat local. Nos clients sont ravis.
                    </p>
                    
                    <div className="flex items-center mt-8 space-x-3">
                        {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                        </div> */}
                        <div>
                            {/* <div className="text-lg font-medium text-gray-200">Dylan Ambrose</div> */}
                            <div className=" text-lg font-medium text-yellow-500">Testimonial 2</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14 ">
                    <p className="text-lg leading-normal">
                    La collaboration avec Lumi Style a été une véritable réussite. Leurs lampes ajoutent une ambiance chaleureuse et accueillante à nos espaces communs et nos chambres. Nous recevons constamment des commentaires positifs de la part de nos clients.
                    </p>
                    <div className="flex items-center mt-8 space-x-3">
                        {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                        </div> */}
                        <div>
                            {/* <div className="text-lg font-medium text-gray-200">Gabrielle Winn</div> */}
                            <div className="text-lg font-medium text-yellow-500">Testimonial 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default ClientsTestemonials