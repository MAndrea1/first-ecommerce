import DataProducts from "../../DataProducts"
import ProductCard from "./ProductCard"
 
  export default function ProductList() {

    return (
      <div className="bg-brown-100">
        <div className="max-w-2xl mx-auto py-4 px-8 sm:py-8 sm:px-12 lg:max-w-7xl lg:px-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Caterogy: General</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {DataProducts.map((product) => (
                <ProductCard key={product.name} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    )
  }
  