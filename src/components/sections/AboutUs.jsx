import React from 'react'
import logo from '../navbar/logo.png'

function AboutUs() {
    const storeOwnerPhoneNumber = '1234567890'; // Example format: '1234567890'

    // Construct the WhatsApp message URL
    const whatsappMessage = `https://wa.me/${storeOwnerPhoneNumber}`;
  return (
<section class="py-20 overflow-hidden bg-gray-50 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black  sm:text-4xl lg:text-5xl">À propos de nous
                </h2>
                <p class="max-w-lg mt-3 text-base leading-relaxed text-gray-600  md:mt-8">
                Chez Lumi Style, nous sommes spécialisés dans la vente de lampes modernes et élégantes. Notre objectif est d'offrir une sélection soigneusement choisie de luminaires qui allient esthétique, fonctionnalité et qualité. Chaque lampe de notre collection est conçue pour transformer vos espaces de vie, apportant une lumière chaleureuse et une touche de sophistication.

                 Que vous cherchiez à créer une ambiance cosy dans votre salon ou à ajouter un éclairage design à votre bureau, Lumi Style vous propose des solutions adaptées à tous les goûts et besoins. Nous croyons que l'éclairage joue un rôle essentiel dans la décoration d'intérieur, et c'est pourquoi nous nous engageons à vous offrir des produits qui allient innovation et élégance.




                </p>

                <p class="mt-4 text-xl text-gray-600  md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 "></span>
                    <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href={whatsappMessage} target='_blank'
                        class="transition-all duration-200 text-yellow-500  hover:text-yellow-600  hover:underline">WhatsApp</a>
                </p>
            </div>

            <div class="relative">
                {/* <img class="absolute inset-x-0 bottom-0  -translate-x-1/2 left-1/2 fill-yellow-500" src="https://img.freepik.com/free-photo/top-view-yellow-circle-with-colorful-geometric-shapes_23-2148209935.jpg?t=st=1728488211~exp=1728491811~hmac=a2af4ae34ba6ce4125d5c16186ac81362c33b6bbd445c4d4e98e463ceeacb3c7&w=1480" alt="" /> */}

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-full" src={logo} alt="" />
            </div>

        </div>
    </div>
</section>
  )
}

export default AboutUs