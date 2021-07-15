import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
// import logoImg from '../../public/images/cfp-cover.jpg'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel className='bg-dark' fade>

                    <Carousel.Item className='h-30 d-flex justify-content-center carousel-sweet'>
                        <Image
                        className="d-block w-100"
                        src="https://www.savoryspiceshop.com/content/mercury_modules/recipes/7/1/1/711/chocolate-puddin-filling-for-fried-pies-806.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Sweet Tooth?</h3>
                            <p>Take a look at our selection of sweet fried pies</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            )

    )
}

export default ProductCarousel

                // eslint-disable-next-line no-lone-blocks
                /* <Carousel pause='hover' className='-dark' fade>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (${product.price})</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel> */

            //     <Carousel.Item>
            //     <Link to='/'>
            //         <Image src={'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'} alt='logo-img' fluid />
            //         <Carousel.Caption className='carousel.caption'>
            //             <h4>From the Kitchen to the Market. Click here to checkout the history of Cheefa's Fried Pies.</h4>
            //         </Carousel.Caption>
            //     </Link>
            //     {/* <img
            //     className="d-block w-100"
            //     src="holder.js/800x400?text=First slide&bg=373940"
            //     alt="First slide"
            //     />
            //     <Carousel.Caption>
            //     <h3>First slide label</h3>
            //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            //     </Carousel.Caption> */}
            // </Carousel.Item>