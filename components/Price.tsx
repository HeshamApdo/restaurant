"use client"
import { PriceProps } from "@/types"
import { useState, useEffect } from 'react'

const Price = ({price,id}:PriceProps) => {
    const [size, setSize] = useState(["Small","Medium","Large"])
    const [selected, setSelected] = useState(0)
    const [cost, setCost] = useState(price)
    const [total, setTotal] = useState(cost)
    const [quantity, setQuantity] = useState(1)
    useEffect(() =>{
        setTotal(price*quantity)
    },[quantity])
  return (
    <div className="flex flex-col gap-2 mt-[20px] justify-center xl:justify-normal">
        <div className="w-fit p-3 text-xl font-semibold text-center bg-black text-yellow-400 rounded-full">
        ${selected === 0 ? total.toFixed(2) : selected === 1 ? (total + 7.3).toFixed(2): (total + 10.2).toFixed(2)}
             </div>
             <div className="flex flex-row gap-2 xl:gap-5 justify-center items-center mt-4">
                {size.map((el,index) =>(
                    <div className={`w-[100px] xl:w-[130px] border border-black rounded-xl px-5 py-2 text-center text-lg cursor-pointer ${selected === index && `bg-black text-yellow-500`}`} onClick={() => setSelected(index)}>
                        {el}
                    </div>
             ))}
            </div>
            <div className="flex flex-row gap-2 justify-center items-center mt-5">
                <div className="w-[fit] bg-black text-yellow-400 p-2 text-xl rounded-xl mr-5">
                    Quantity
                </div>
            <div className="cursor-pointer hover:-translate-x-1 transition-all duration-200" onClick={() =>setQuantity(prev => prev > 1 ? prev -1 : 1)}>
                <img src="/left.png" />
            </div>
            <div className="w-[40px] h-[40px] bg-black text-yellow-400 text-center flex justify-center items-center rounded-full text-xl font-semibold shadow-xl">
                {quantity}
            </div>
            <div className="cursor-pointer hover:translate-x-1 transition-all duration-200" onClick={() =>setQuantity(prev => prev < 9 ? prev + 1: 9)}>
                <img src="/right.png" />
            </div>
            </div>
    </div>
  )
}

export default Price