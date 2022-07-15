import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./Shop.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";



export default function Shop() {
    const [products, setProducts] = React.useState([])
    const [filter, setFilter] = React.useState([])

    window.onload = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setFilter(data)
                setProducts(data)
            })
    }
    const setDrawerOpen = () => {
        document.getElementById('close').classList.remove('d-none');
        document.getElementById('open').classList.remove('active-3');
        document.getElementById('open').classList.add('active-2');
        document.getElementById('category').classList.add('active');


    }
    const setDrawerClose = () => {
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');

    }


    const CategoryFilterAll = () => {
        setFilter(products)
        document.querySelector('.pd').classList.add('d-none');
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.pd').classList.remove('d-none');
        }, 250);
    }
    const CategoryFilterMen = () => {
        setFilter(products.filter(pds => pds.category === "men's clothing"));
        document.querySelector('.pd').classList.add('d-none');
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.pd').classList.remove('d-none');
        }, 250);
    }
    const CategoryFilterJewelery = () => {
        setFilter(products.filter(pds => pds.category === "jewelery"))

        document.querySelector('.pd').classList.add('d-none');
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.pd').classList.remove('d-none');
        }, 250);
    }
    const CategoryFilterElectronic = () => {
        setFilter(products.filter(pds => pds.category === "electronics"))
        document.querySelector('.pd').classList.add('d-none');
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.pd').classList.remove('d-none');
        }, 250);
    }
    const CategoryFilterWomen = () => {
        setFilter(products.filter(pds => pds.category === "women's clothing"))
        document.querySelector('.pd').classList.add('d-none');
        document.getElementById('close').classList.add('d-none');
        document.getElementById('open').classList.remove('d-none');
        document.getElementById('open').classList.add('active-3');
        document.getElementById('category').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.pd').classList.remove('d-none');
        }, 250);
    }

    let loading;

    if (products.length === 0) {
        loading = <> <div id='loading' className="d-flex justify-content-center mt-5 active">
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
            </button>
        </div>
            <section id='products-view'>
                <div className="category-tool-bar-container d-none">

                    <div className="category-container" id='category'>
                        <div className="category-content-box">
                            <h6 className="category-content-text" onClick={CategoryFilterAll} >All</h6>
                            <h6 className="category-content-text" id="men's clothing" onClick={CategoryFilterMen}>Men's Clothing</h6>
                            <h6 className="category-content-text" id="jewelery" onClick={CategoryFilterJewelery}>Jewelery</h6>
                            <h6 className="category-content-text" id="electronics" onClick={CategoryFilterElectronic}>Electronics</h6>
                            <h6 className="category-content-text" id="women's clothing" onClick={CategoryFilterWomen}>Women's Clothing</h6>
                        </div>
                    </div>
                    <div className="tool-bar-container">
                        <div className="tool-bar d-none" id='close' onClick={setDrawerClose} >
                            <ChevronLeftIcon />
                        </div>
                        <div className="tool-bar" id='open' onClick={setDrawerOpen} >
                            <MenuIcon />
                        </div>
                    </div>
                </div>
                <div className="row mt-5 d-none">


                    {filter.map(fill =>
                        <div className="col-lg-4 col-sm-12 col-md-6  d-flex justify-content-center"><Card sx={{ maxWidth: 300 }} className=" shadow my-5">
                            <Link to={`/product/${fill.id}`} >
                                <CardActionArea>
                                    <CardMedia
                                        className="p-2 image"
                                        component="img"
                                        image={fill.image}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {fill.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Price:</b> ${fill.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                        </div>)}

                </div>
            </section></>
    } else {
        loading = <>
            <div id='loading' className="d-none justify-content-center mt-5">
                <button className="btn btn-dark" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </button>
            </div>


            <div style={{ background: '#fff', paddingTop:'15px' }}>
                <div className="text-center">
                    <h1 style={{ color: '#ffffff', height: '60px', WebkitTextStroke: '5px transparent', marginBottom: '5px', background: 'linear-gradient(rgb(140, 72, 210),rgb(207, 112, 90))', WebkitBackgroundClip: 'text' }} >Our Best selling Products</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className="mySwiper container"
                >
                    <SwiperSlide>
                        <div className="row align-items-center justify-content-center" style={{ background: '#fff', padding: '20px 30px' }}>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {products.filter(pd => pd.category === "women's clothing").slice(0, 1).map(pd => <><h3>{pd.title}</h3><p>{`${pd.description}`.slice(0, 100)}...</p><Link to={`/product/${pd.id}`}><Button variant="contained" style={{ background: 'linear-gradient(135deg,rgb(140, 72, 210),rgb(207, 112, 90))' }}>Learn More</Button></Link></>)}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center mt-5">
                                {products.filter(pd => pd.category === "women's clothing").slice(0, 1).map(pd => <><img src={pd.image} className="" style={{ height: '250px' }} alt="..." /></>)}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row d-flex align-items-center jus-content-center" style={{ background: '#fff', padding: '20px 30px' }}>
                            <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
                                {products.filter(pd => pd.category === "men's clothing").slice(0, 1).map(pd => <><img src={pd.image} className="" style={{ height: '250px' }} alt="..." /></>)}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                                {products.filter(pd => pd.category === "men's clothing").slice(0, 1).map(pd => <><h3>{pd.title}</h3><p>{`${pd.description}`.slice(0, 100)}...</p><Link to={`/product/${pd.id}`}><Button variant="contained" style={{ background: 'linear-gradient(135deg,rgb(140, 72, 210),rgb(207, 112, 90))' }}>Learn More</Button></Link></>)}
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center jus-content-center" style={{ background: '#fff', padding: '20px 30px' }}>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {products.filter(pd => pd.category === "jewelery").slice(0, 1).map(pd => <><h3>{pd.title}</h3><p>{`${pd.description}`.slice(0, 100)}...</p><Link to={`/product/${pd.id}`}><Button variant="contained" style={{ background: 'linear-gradient(135deg,rgb(140, 72, 210),rgb(207, 112, 90))' }}>Learn More</Button></Link></>)}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mt-5">
                                {products.filter(pd => pd.category === "jewelery").slice(0, 1).map(pd => <><img src={pd.image} className="" style={{ height: '250px' }} alt="..." /></>)}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center jus-content-center" style={{ background: '#fff', padding: '20px 30px' }}>
                            <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
                                {products.filter(pd => pd.category === "electronics").slice(0, 1).map(pd => <><img src={pd.image} className="" style={{ height: '250px' }} alt="..." /></>)}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                                {products.filter(pd => pd.category === "electronics").slice(0, 1).map(pd => <><h3>{pd.title}</h3><p>{`${pd.description}`.slice(0, 100)}...</p><Link to={`/product/${pd.id}`}><Button variant="contained" style={{ background: 'linear-gradient(135deg,rgb(140, 72, 210),rgb(207, 112, 90))' }}>Learn More</Button></Link></>)}
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>









            <section className="" id='products-view'>
                <div className="row mt-5">
                    <div className="col-lg-2 col-md-3 col-sm-12 mt-5">

                        <div className="category-tool-bar-container sticky-top me-5">
                            <div className="category-container mt-3 ms-2" id='category'>
                                <div className="category-content-box">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className='fw-semibold category-title'>Category</p>
                                        <div className="tool-bar active-2 close mt-3 mb-3" id='close' onClick={setDrawerClose} >
                                            <ChevronLeftIcon />
                                        </div>
                                    </div>
                                    <h6 className="category-content-text" onClick={CategoryFilterAll} >All</h6>
                                    <h6 className="category-content-text" id="men's clothing" onClick={CategoryFilterMen}>Men's Clothing</h6>
                                    <h6 className="category-content-text" id="jewelery" onClick={CategoryFilterJewelery}>Jewelery</h6>
                                    <h6 className="category-content-text" id="electronics" onClick={CategoryFilterElectronic}>Electronics</h6>
                                    <h6 className="category-content-text" id="women's clothing" onClick={CategoryFilterWomen}>Women's Clothing</h6>
                                </div>
                            </div>
                            <div className="tool-bar-container mt-3">
                                <div className="tool-bar active-2 ms-4 " id='open' onClick={setDrawerOpen} >
                                    <MenuIcon />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-10 col-md-9 col-sm-12">
                        <div className="row mt-3 d-flex pd">
                            {filter.map(fill =>
                                <div className="col-lg-4 col-sm-12 col-md-6 d-flex my-5 card-pd justify-content-center">
                                    <Card className=" shadow" style={{ maxWidth: '280px' }} >
                                        <Link to={`/product/${fill.id}`}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className="p-2 image"
                                                    component="img"
                                                    image={fill.image}
                                                    alt=""
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {fill.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <b>Price:</b> ${fill.price}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    }

    return (<>
        {loading}
    </>
    );
}