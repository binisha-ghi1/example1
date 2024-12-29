import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    console.log(response.products);
    setProducts(response.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-white font-bold bg-black w-full text-center py-4 mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {products.map((item) => {
          return (
            <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white transition-transform transform hover:scale-105">
              <img src={item.thumbnail} alt="Product thumbnail" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-500">Rating: {item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
