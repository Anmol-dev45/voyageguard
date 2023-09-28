import { getDestinations } from '@/sanity/lib/client'
const TopDestination = async () => {


  const destinations = await getDestinations()
  console.log(destinations)
  return (
    <div className='flex items-center gap-9 justify-start flex-wrap'>
      {destinations.map((destination: any) => (
        <div key={destination._id} className='w-full md:w-80 '>
          <div className='w-full aspect-square bg-cover flex opacity-90 p-5 rounded-3xl' style={{
            backgroundImage: `url(${destination.image})`
          }}>
            <h2 className='mt-auto left-align text-white font-black text-5xl font-exo text-shadow'>
              {destination.name}
            </h2>
          </div>
          {
            destination.description && (
              <p className='text-justify font-medium font-exo line-clamp-3'>{destination.description}</p>
            )
          }

        </div>
      ))}
    </div>

  )
}

export default TopDestination