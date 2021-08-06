import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image, Button } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
// import { listDisplays } from '../actions/displayActions'

function ProductCarousel() {
    // const dispatch = useDispatch()

    // const displayList = useSelector(state => state.displayList)
    // const { error, loading, displays } = displayList

    // let keyword = history.location.search

    // useEffect(() => {
    //     dispatch(listDisplays(keyword))
    // }, [dispatch, keyword])

    return (
        <Carousel className='bg-dark carousel-container' fade>
            <Carousel.Item className='h-30 d-flex justify-content-center carousel-sweet'>
                <Carousel.Caption className='d-flex align-items-center carousel-caption' fluid>
                    <Image className='logo-img' src='../images/cfp-cover-1.png' alt='logo-img' fluid />
                    <Button variant='outline-dark'>Check it Out</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
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


        //     <Carousel className='bg-dark carousel-container' fade>

        //     <Carousel.Item className='h-30 d-flex justify-content-center carousel-sweet'>

        //         <Carousel.Caption className='d-flex align-items-center carousel-caption'>
        //             <Image className='logo-img' src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/117392708_148406646900885_2986494580076297624_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DNswBhgsJjMAX9NAFUo&_nc_ht=scontent-lax3-2.xx&oh=cbc219369c29dbdd832520d4c8c3828f&oe=60FB686E'} style={{borderRadius:'50%'}}/>
        //             <Button variant='outline-dark'>Check it Out</Button>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src="holder.js/800x400?text=Third slide&bg=20232a"
        //         alt="Third slide"
        //         />

        //         <Carousel.Caption>

        //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>