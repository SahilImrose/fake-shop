import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const { pdId } = useParams();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + pdId)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [pdId])

    return (<>
         <div className="d-flex justify-content-center">
             <div className='container mt-5 row align-items-center'>
                 <div className="img-box col-lg-5 col-md-5 col-sm-12 mb-5">
                     <img className='img-fluid' src={product.image} alt='' />
                 </div>
                 <div className="content mt-5 ms-5 d-flex flex-wrap align-items-center col-lg-5 col-md-5 col-sm-12">
                     <div>
                         <h2>{product.title}</h2>
                         <h3>${product.price}</h3>
                         <p>{product.description}</p>
                     </div>
                     <div>
                         <p><b>Category:</b> {product.category}</p>
                     </div>
                 </div>
             </div>
         </div>
    </>
    );
};

export default SingleProduct;