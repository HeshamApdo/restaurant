import Link from "next/link";


export default function about(){
    return(
        <div className="bg-black">
            <div className="flex flex-col gap-10 justify-center items-center p-10 selection:bg-slate-700 selection:text-yellow-400">
                <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 border-b border-yellow-400">
                𝖡𝖮𝖱𝖠𝖦Ó
                </h1>
                <div className="flex flex-col gap-4 justify-center items-center text-center px-1 md:px-20">
                    <div className="text-yellow-400 text-xl opacity-90">
                    There is a certain wisdom in the dishes found at Boragó. Cultures, techniques, and traditions that can be traced back thousands of years simmer in the pot, roast on the grill, and sizzle in the pan. Moments later what appears at the table are meats, vegetables, and fish, all grown, caught, and gathered in the abundant land less than a stone’s throw away. In Santiago, Chile under the summit of the city’s tallest mountain Cerro Manquehue, an appreciation and innovation of indigenous Mapuche ingredients as well as foraging and cooking practices reimagines Latin American fine dining on the global stage. While this may be the perch of the world-renowned chef Rodolfo Gúzman, his team reaches all corners of the vast country, with over 200 foragers and food producers finding legendary ingredients with unparalleled expertise. Once these ingredients make their way to Boragó and become magical dishes crafted by Guzmán, there is a sublime dining experience to be found.
                    </div>
                    <div className="text-yellow-400 text-xl opacity-90">
                    Boragó claimed its spot on the World’s 50 Best Restaurants list in 2018 by offering a one-of-a-kind luxury culinary experience that revitalises the gastronomical potential of ingredients locally sourced in Chile. As Guzmán shared, in his eyes the Chilean fine dining scene he was accustomed to often prioritised ingredients and cooking techniques from countries such as France and Spain. While taking inspiration from others is important, the chef identified a lack of investment and imagination when it came to celebrating the different Latin flavours that existed in his own country. He especially saw the need to foster a deeper appreciation for the indigenous Mapuche cultural traditions and practices when it came to sourcing and cooking food in the Latin American fine dining world.
                    </div>
                    <div className="text-yellow-400 opacity-85 px-5 lg:px-[100px]">
                    Attuned to the microseasons of the country’s varying landscapes, the tasting menu keeps evolving to celebrate and bring to the plate the riches of rare ingredients only available at certain times of the year. Examples of these include the precious pink grapes from a plant native to Chile known as sea-urchin cactus or Quisco. In fact, you only have to look to the many flowers that are key players in Boragó’s offerings, to understand the exclusivity of the ingredients, with stalwarts including the flowers of desert plants that only come to bloom once a year. From one dish to the next, it is not just what is on the plate that shines. Accompanying wines represent the unfathomable diversity of Chile’s geographical territories as Chef Gúzman is always looking far and wide for a range of offerings that celebrate the country’s history of wine and the family-run businesses that keep the traditions of wine alive.
                    </div>
                </div>
                <Link href="/products/pizza" className="w-fit p-1 mt-2 bg-black rounded-full flex justify-center items-center cursor-pointer">
                        <img src="/back.png"/>
                </Link>
            </div>
        </div>
    )
}