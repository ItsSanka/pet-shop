import React, { useEffect, useState } from 'react'
import { assets } from '../Assets/images'


// fetch product api

function Product() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProductData = async()=>{
            try {
               const res = await fetch("https://monitor-backend-rust.vercel.app/api/products")
               const data = await res.json()
               setProducts(data)
               console.log(data);
               
            } catch (error) {
                console.error(error)
            }
        }
        fetchProductData()
    },[])

  return (
    <>
        <div className="headings md:flex md:text-left justify-between items-center pb-6 min-[320px]:block min-[320px]:text-center">
            <h3 className='font-robo text-3xl text-blue-950 font-semibold'><span className='text-lg text-black'>Hard to choose right products for your pets?</span> <br /> Our Products</h3>
            <button
              type="button"
              href="#"
              className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
            >
              View Intro <img src={assets.right} alt="play" />
            </button>
        </div>


        {!products ? <h2 className='flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold uppercase'>Loading...</h2> : <>
        <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6'>
              {products.map((product) =>(
                <article key={product.id} className="shadow-lg p-3 rounded-2xl " >
                  <img src={product.image} alt={product.name} className="rounded-2xl pb-3 w-100"/>
                  <h3 className="text-blue-950 font-bold text-xl">{product.id} - {product.name}</h3>
                  <p className="text-neutral-600 text-sm font-bold">Product: {product.Toy} &nbsp;&nbsp;|&nbsp;&nbsp; Size: {product.size}</p>
                  <h4 className="text-blue-950 font-bold text-md mt-1">{product.price}</h4>
                  <div className='flex items-center gap-3 p-2 mt-2 rounded-lg bg-yellow-200'>
                    <img src={assets.gift} alt="gift" />
                     <h4 className="text-blue-950 font-semibold text-md">|&nbsp;&nbsp;&nbsp;&nbsp;{product.description}</h4>
                  </div>
                </article>
              ))}
            </div>
        </section>
        </>}
    </>
  )
}

export default Product
