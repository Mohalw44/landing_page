import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"

const PopularProducts = () => {
  return (
    <section 
      id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl
      font-palanquin font-bold">
      <span className="text-coral-red">Popular</span> Products</h2>

      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"> Step into a world where fashion meets functionality,
       and where your feet are pampered with every step.</p>
       </div>
       <div className=" mt-16 grid lg:grid-cols-4
       md:grid-cols-3 sm:grid-col2 grid-cols-1
       sm:gap-6 gap-14">
      {products.map( product => (
        <PopularProductsCard key=
        {product.name} {...product} />
        ))}

      </div>

    </section>
  )
}

export default PopularProducts