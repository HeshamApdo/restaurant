

export default function contact(){
    return(
        <div className="bg-gradient-to-r from-black via-yellow-950 to-black flex justify-center items-center w-screen h-screen">
                            <form className="flex flex-col gap-3 text-center mx-auto">
                <div className="flex flex-col gap-3 text-center mx-auto">
                    <div className="text-yellow-400">
                        <div className="text-3xl font-semibold pt-10 pb-5">
                            Contact Us
                        </div>
                        <div>
                            <p className="text-yellow-300">We will be very happy to contact you.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-center items-center bg-white w-[350px] rounded-full">
                        <div className="flex items-center">
                            <span>
                                <img src="/name.png" width={24} height={24} className=""/>
                            </span>
                            <input type="text" className="outline-none w-[300px] h-[40px] rounded-full indent-2 bg-inherit caret-green-500" maxLength={10} placeholder="Name" required/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[350px] rounded-full">
                        <div className="flex items-center">
                            <span>
                                <img src="/email.png" width={24} height={24} className=""/>
                            </span>
                            <input type="email" className="outline-none w-[300px] h-[40px] rounded-full indent-2 bg-inherit caret-green-500" maxLength={30} placeholder="Email" required/>
                        </div>
                    </div>
                    <div>
                        <textarea className="rounded-xl outline-none indent-5 caret-green-500" cols={30} rows={5} maxLength={50} placeholder="Your Message"/>
                    </div>
                    </div>
                    <div className="flex justify-center items-center pb-5 lg:pb-0">
                        <input type="submit" value="Send" className='px-6 py-3 bg-yellow-200 rounded-full hover:bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-800 transition-all duration-200 group w-[100px] cursor-pointer font-semibold'/>
                    </div>
                </div>
                </form>
        </div>
    )
}