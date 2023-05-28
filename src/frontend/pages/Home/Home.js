import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='home-container'>
                <div className='home-image-container'>
                    <img
                        onClick={() => navigate('/products')}
                        className='home-img'
                        src="https://img.freepik.com/free-vector/people-making-online-purchases_74855-4454.jpg?2&w=1380&t=st=1685215185~exp=1685215785~hmac=be00b945449d185136228b7c194dae437b0283186686ad45fc07be458b3c21ef"
                        alt="home-page-products"
                    />
                    {/* <img
                        src="https://images.pexels.com/photos/5935754/pexels-photo-5935754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="home-page-products"
                    /> */}
                </div>
                <div className='home-conatiner-subheading'>
                    Shop Now
                </div>
                <div className='home-container-cards'>

                    <div className='cards'>
                        <div className='card-image-container'>
                            <img
                                className='card-image'
                                src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1403_6c8dcb26-9506-4fcd-a8a0-b1020c18a6b7_360x.jpg?v=1659163689"
                                alt=''
                            />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-text'>Men's Collection</div>
                            <div className='card-content-footer'>Check out latest Mens collection</div>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card-image-container'>
                            <img
                                className='card-image'
                                src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1403_6c8dcb26-9506-4fcd-a8a0-b1020c18a6b7_360x.jpg?v=1659163689"
                                alt=''
                            />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-text'>Men's Collection</div>
                            <div className='card-content-footer'>Check out latest Mens collection</div>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card-image-container'>
                            <img
                                className='card-image'
                                src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_sep21_1403_6c8dcb26-9506-4fcd-a8a0-b1020c18a6b7_360x.jpg?v=1659163689"
                                alt=''
                            />
                        </div>
                        <div className='card-content'>
                            <div className='card-content-text'>Men's Collection</div>
                            <div className='card-content-footer'>Check out latest Mens collection</div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}