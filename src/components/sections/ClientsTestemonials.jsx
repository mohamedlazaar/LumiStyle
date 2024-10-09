import React from 'react'

function ClientsTestemonials() {
  return (
    <div class="py-5 ">
    <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div class="text-sm font-bold tracking-wider text-yellow-500 uppercase">Testimonials</div>
        <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight lg:text-4xl ">Voici ce que nos clients ont dit</h2>
        {/* <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">Testimonials is a great way to increase brand trust and awareness. Use this section to highlight your popular customers.</p> */}
    </div>
    <div class="container p-6 mx-auto mb-10 xl:px-0">
        <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div class="lg:col-span-2 xl:col-auto">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100800 md:px-14 rounded-2xl md:py-14 bg-gray-100">
                    <p class="text-lg leading-normal ">
                    Depuis que nous avons équipé nos chambres et suites avec les lampes de Lumi Style, nos clients ne cessent de complimenter l'atmosphère apaisante et l'éclairage raffiné. Lumi Style a su apporter une touche d'élégance unique à notre établissement.
                        </p>
                    <div class="flex items-center mt-8 space-x-3">
                        {/* <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                        </div> */}
                        <div>
                            <div class="text-lg font-medium text-yellow-500">Testimonial 1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100  md:px-14 rounded-2xl md:py-14">
                    <p class="text-lg leading-normal"> 
                    Nous cherchions à moderniser l'éclairage de notre riad tout en conservant le charme traditionnel. Lumi Style a parfaitement répondu à nos attentes avec des lampes qui allient design contemporain et artisanat local. Nos clients sont ravis.
                    </p>
                    
                    <div class="flex items-center mt-8 space-x-3">
                        {/* <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                        </div> */}
                        <div>
                            {/* <div class="text-lg font-medium text-gray-200">Dylan Ambrose</div> */}
                            <div class=" text-lg font-medium text-yellow-500">Testimonial 2</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14 ">
                    <p class="text-lg leading-normal">
                    La collaboration avec Lumi Style a été une véritable réussite. Leurs lampes ajoutent une ambiance chaleureuse et accueillante à nos espaces communs et nos chambres. Nous recevons constamment des commentaires positifs de la part de nos clients.
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                        {/* <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                        </div> */}
                        <div>
                            {/* <div class="text-lg font-medium text-gray-200">Gabrielle Winn</div> */}
                            <div class="text-lg font-medium text-yellow-500">Testimonial 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ClientsTestemonials