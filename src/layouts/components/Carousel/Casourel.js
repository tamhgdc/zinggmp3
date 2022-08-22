import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

import CarouselItem from './CarouselItem';
import { NextButton, PrevButton } from '~/components/Button/SlideButton';

const cx = classNames.bind(styles);

function Carousel({ data }) {
    const sliderItems = data.items;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        styles: {
            backgroundColor: 'transparent',
        },
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0,
                },
            },
        ],
    };

    return (
        <div className={cx('container')}>
            <Slider {...settings} className={cx('casourel-list')}>
                {sliderItems.map((sliderItem) =>
                    sliderItem.type === 1 || sliderItem.type === 4 ? (
                        <CarouselItem key={sliderItem.encodeId} data={sliderItem} className={cx('carousel-item')} />
                    ) : (
                        ''
                    ),
                )}
            </Slider>
        </div>
    );
}

export default Carousel;
