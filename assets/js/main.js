$(document).ready(function () {
  //Animation js
  /* AOS.init({
        offset: 200,
        duration: 1000,
    });
    */

  ///-----------------banner slider is here

  $(".banner-slid").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1,
    prevArrow: $(".nn2"),
    nextArrow: $(".pp2"),
    responsive: [],
  });

  $(".banner-course-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".course-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".teacher-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [],
  });

  $(".video-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".review-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 2,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 908,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".company-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".laptop-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
