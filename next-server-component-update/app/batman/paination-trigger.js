"use client"

import {useRouter} from 'next/navigation';

export default function PaginationTrigger({currentTime}) {
  console.log(222222222, 'batman');
  const router = useRouter()
 
  const handleClick = () => {
    router.push('/batman?page=2');
  };

  return (
    <div>
      <input type="text"/>
      <button onClick={handleClick}>page 2</button>
      <span>{currentTime}</span>
    </div>
  )
}