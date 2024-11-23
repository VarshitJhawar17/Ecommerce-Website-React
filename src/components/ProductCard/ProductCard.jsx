import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { MensShirt } from '../Data/MensShirtData';
import { useParams } from 'react-router-dom';
import ProductReviewCard from './ProductReviewCard';

function ProductCard() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const selectedProduct = MensShirt.find((item) => item.id === parseInt(id, 10));
    setProduct(selectedProduct);

    // Set the default color and size if the product exists
    if (selectedProduct) {
      setSelectedColor(selectedProduct.colorOptions?.[0] || null);
      setSelectedSize(selectedProduct.sizes?.[0] || null);
    }
  }, [id]);

  if (!product) {
    return <div>Error: Product data is unavailable</div>;
  }

  const reviews = { href: '#reviews', average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white px-6 py-10 lg:px-16 lg:py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="lg:max-w-lg lg:w-full">
          <img
            alt={product.name}
            src={product.image}
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-6 lg:col-span-1 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-2">{`₹${product.price}`}</p>

          {/* Reviews */}
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating ? 'text-yellow-500' : 'text-gray-300',
                    'h-5 w-5'
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {`${reviews.totalCount} reviews`}
            </button>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Color Options */}
          {product.colorOptions && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="flex items-center space-x-3 mt-4"
              >
                {product.colorOptions.map((color) => (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ checked }) =>
                      classNames(
                        checked ? color.selectedClass : '',
                        'cursor-pointer rounded-full p-0.5 focus:outline-none'
                      )
                    }
                  >
                    <span
                      className={classNames(
                        color.class,
                        'h-10 w-10 rounded-full border border-black/10'
                      )}
                      aria-hidden="true"
                    />
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Size Options */}
          {product.sizes && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="grid grid-cols-4 gap-4 mt-4"
              >
                {product.sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.size}
                    value={size}
                    disabled={!size.inStock}
                    className={({ checked }) =>
                      classNames(
                        size.inStock
                          ? 'bg-white text-gray-900'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed',
                        checked ? 'ring-2 ring-indigo-500' : '',
                        'cursor-pointer rounded-md py-3 text-sm font-medium uppercase text-center shadow-sm'
                      )
                    }
                  >
                    <span>{size.size}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Add to Bag Button */}
          <button
            type="button"
            className="mt-8 w-full rounded-md bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='mt-10'>
        <ProductReviewCard/>
        <ProductReviewCard/>
        <ProductReviewCard/>
        <ProductReviewCard/>
      </div>
    </div>
  );
}

export default ProductCard;
