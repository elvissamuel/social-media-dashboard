import Image from 'next/image'
import { FiTriangle } from 'react-icons/fi';
import greenArrow from '../assets/icons/greenArrow.svg'
import redArrow from '../assets/icons/redArrow.svg'

const Cards = ({card}) => {
  return (
    <div className={`pt-1 rounded h-[216px] ${card.handle === 'fb' ? 'bg-gradient-to-r from-[#1877F2] to-[#3B82F6]' : card.handle === 'tw' ? 'bg-gradient-to-r from-[#1DA1F2] to-[#39A9DB]': card.handle ==='ig' ? 'bg-gradient-to-r from-[#E4405F] to-[#EC87C0]' : 'bg-gradient-to-r from-[#FF0000] to-[#FF6F6F]'}`}>
      <div className={`flex w-full h-full  bg-[#F1F3FA] dark:bg-slate-900 shadow-xl flex-col items-center text-center gap-4 justify-center p-5 border-t-2  `}>
        <div className='flex items-center gap-2'>
            <Image src={card.logo} alt="" />
            <p className='text-sm font-bold'>{card.username}</p>
        </div>
        <div>
            <p className='text-5xl font-bold'>{card.followers}</p>
            <p className='uppercase tracking-wide'>{card.tag}</p>
        </div>
        <a href="" className={`text-xs font-bold flex gap-1 items-center ${card.handle === 'yt' ? 'text-red-500' : 'text-green-500'}`}> {card.handle === 'yt' ? <Image src={redArrow} /> : <Image src={greenArrow} />} {card.stat} Today</a>
      </div>
    </div>
  )
}

export default Cards
