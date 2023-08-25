"use client";
import Image from 'next/image'

import facebook from '../app/assets/icons/facebook.svg'
import twitter from '../app/assets/icons/twitter.svg'
import instagram from '../app/assets/icons/instagram.svg'
import youtube from '../app/assets/icons/youtube.svg'
import Cards from './component/Cards'
import ToggleButton from './component/ToggleButton'
import OverviewCard from './component/OverviewCard'
import { useEffect, useState } from 'react'

const Home = () => {
  const [theme, setTheme] = useState('light');


  useEffect(() =>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  const socialMediaDetails = [
    {
      handle: 'fb',
      logo: facebook,
      username: '@nathanf',
      followers: '1987',
      tag: 'followers',
      stat: '12'
  }, 
  {
    handle: 'tw',
    logo: twitter,
    username: '@nathanf',
    followers: '1004',
    tag: 'followers',
    stat: '99'
},
{
  handle: 'ig',
  logo: instagram,
  username: '@realnathanf',
  followers: '11k',
  tag: 'followers',
  stat: '1009'
}, 
{
  handle: 'yt',
  logo: youtube,
  username: 'Nathan F.',
  followers: '8329',
  tag: 'subscribers',
  stat: '144'
}
]
const Overview = [
  {handle: 'fb', logo: facebook, title: 'Page Views', number: '87', stat: 3},
  {handle: 'fb', logo: facebook, title: 'Likes', number: '52', stat: 2},
  {handle: 'ig', logo: instagram, title: 'Likes', number: '5462', stat: 2257},
  {handle: 'ig', logo: instagram, title: 'Profile Views', number: '52k', stat: 1375},
  {handle: 'tw', logo: twitter, title: 'Retweets', number: '117', stat: 303},
  {handle: 'tw', logo: twitter, title: 'Likes', number: '507', stat: 553},
  {handle: 'yt', logo: youtube, title: 'Likes', number: '107', stat: 19},
  {handle: 'yt', logo: youtube, title: 'Total Views', number: '1407', stat: 12},
]
  return (
    <div className='bg-white text-black dark:bg-slate-950 dark:text-white px-10 md:px-20 xl:px-40 py-2 relative z-10'>
      <div className='w-full h-[10%] lg:h-[20%] xl:h-[30%] bg-slate-50 dark:bg-slate-900 absolute left-0 top-0 rounded-b-lg -z-20'></div>
      <div className='z-50'>
        <div className='md:flex items-center justify-between my-4'>
          <div className='border-b pb-2 md:border-b-0'>
            <h2 className='text-2xl font-bold'>Social Media Dashboard</h2>
            <p className='text-sm font-semibold'>Total Followers: 23,004</p>
            {/* <button className='rounded text-x s px-2 border' onClick={handleThemeSwitch}> Switch</button> */}
          </div>
          <div className='flex items-center justify-between md:justify-normal mt-2 md:mt-0 gap-2 z-auto'>
            <p className='text-sm font-semibold'>Dark Mode: </p>
            <ToggleButton onclick={handleThemeSwitch} />
          </div>
        </div>
        <section className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 mt-6">
          {socialMediaDetails.map((item, index) =>{
            return <div className='cursor-pointer'>
              <Cards card={item} />
            </div>
          })}
        </section>
        <section className='mt-12'>
          <h2 className='text-2xl font-semibold mb-4'>Overview - Today</h2>
          <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-3'>
            {Overview.map((item, index) =>{
              return <div key={index}>
                <OverviewCard card={item} />
              </div>
            })}
          </div>
        </section>
      </div>

    </div>
  )
}

export default Home

