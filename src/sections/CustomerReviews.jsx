import ReviewsCard from "../components/ReviewsCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What are Our
        <span className="text-coral-red"> Customer </span>
        Say
      </h3>
      <p className="info-text text-cente m-auto mt-4 max-w-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly
      items-center max-lg:flex-col gap-14">
      {reviews.map(review => (
        <ReviewsCard 
       key={review.customerName}
       customerName={review.customerName}
       rating={review.rating}
       feedback={review.feedback}
       imgURL={review.imgURL} /> 
       ))}
      </div>
      
    </section>
  )
}

export default CustomerReviews