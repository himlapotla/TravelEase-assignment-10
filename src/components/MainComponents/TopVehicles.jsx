import React from 'react'

const TopVehicles = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-3'>
            <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl border-3 border-amber-400">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src="https://i.ibb.co.com/xqvVQ8mC/large-Suzuki-Gixxer-price-review-9ee36648ef.webp" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">vehicle name: Gixxer Fi Abs</h2>
                <p><span className="font-semibold">Owner:</span> Shahriar</p>
                <p><span className="font-semibold">Category:</span> Bike</p>
                <p><span className="font-semibold">Price Per Day:</span> 400 BDT</p>
                <p><span className="font-semibold">Location:</span> Dhaka</p>

            </div>

            <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl border-3 border-amber-400">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src="https://i.ibb.co.com/tMXtJbNX/Truck-Lagbe-02-featured.jpg" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">vehicle name: Truck</h2>
                <p><span className="font-semibold">Owner:</span> Arman</p>
                <p><span className="font-semibold">Category:</span> Truck</p>
                <p><span className="font-semibold">Price Per Day:</span> 1500 BDT</p>
                <p><span className="font-semibold">Location:</span> Rajshahi</p>

            </div>

            <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl border-3 border-amber-400">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src="https://i.ibb.co.com/XrKXLCq8/IMG-8237-1024x682.jpg" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">vehicle name: Bmw</h2>
                <p><span className="font-semibold">Owner:</span> Arish</p>
                <p><span className="font-semibold">Category:</span> Car</p>
                <p><span className="font-semibold">Price Per Day:</span> 5000 BDT</p>
                <p><span className="font-semibold">Location:</span> Rajshahi</p>

            </div>

             <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl border-3 border-amber-400">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src="https://i.ibb.co.com/zhnBPNQc/Suzuki-Gixxer.jpg" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">vehicle name: Gixer Monoton</h2>
                <p><span className="font-semibold">Owner:</span> Himel</p>
                <p><span className="font-semibold">Category:</span> Bike</p>
                <p><span className="font-semibold">Price Per Day:</span> 350 BDT</p>
                <p><span className="font-semibold">Location:</span> Rajshahi</p>

            </div>
        </div>
    )
}

export default TopVehicles