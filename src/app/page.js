import Image from 'next/image'
import { Button } from 'antd'

export default function Home() {
  const placeTypes = ["Single Room", "Self Con", "Room and Parlor", "1 BedRoom",  "2 BedRoom", "3 BedRoom"]

  return (
    <div>
      <div className=' flex flex-row  gap-2 overflow-auto scrollbar-hide  '>
        {
          placeTypes.map(place => <Button className=' bg-black  text-red-500 ' > {place} </Button>)
        }
      </div>
      <div className=' h-screen '>
        
      </div>
    </div>
  )
}
