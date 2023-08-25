import React from 'react'
import Image from 'next/image'
import greenArrow from '../assets/icons/greenArrow.svg'
import redArrow from '../assets/icons/redArrow.svg'

const OverviewCard = ({card}) => {
  return (
    <div className='p-6 bg-[#F1F3FA] dark:bg-slate-900 rounded h-[125px] flex flex-col justify-between'>
      <div className='flex justify-between items-center'>
        <p className='text-sm font-semibold'>{card.title}</p>
        <Image src={card.logo} />
      </div>
      <div className='flex justify-between items-end'>
        <p className='text-2xl font-bold'>{card.number}</p>
        <p className={`text-sm font-semibold flex items-center gap-1 ${card.stat <= 20 ? 'text-red-500' : 'text-green-500'}`}>{card.stat <= 20 ? <Image src={redArrow} /> : <Image src={greenArrow} /> } {card.stat}%</p>
      </div>
    </div>
  )
}

export default OverviewCard
