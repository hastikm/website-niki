
import { reviews } from '../../constans/index';
import ReviewCard from '../../section/reviewcard/ReviewCard'

const CustomRew = () => {
  return (
    <section className='max-container'>
      <h3 className=' font-palanquin text-center text-4xl font-bold '>what Our <span className='text-coral-red'>Customers</span> says?</h3>
      <p className='text-gray-600 m-auto text-center max-w-lg text-info pt-12 text-[19px]'>  Hear genuine stories from our satisfied 
        customers about their
        exceptional experiences with us.</p>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          
          {reviews.map((review , index) =>(
            <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}

        </div>
    </section>
  )
}

export default CustomRew
