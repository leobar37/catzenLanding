## testimonial

### Prerequisites

- OSwald font
- Open sans Font
- Swiper Carousel

```tsx
<section className="testimonial">
  <h1 className="title text-center text-capitalize">testimonios</h1>
  <Swiper centeredSlides={true} slidesPerView={3}>
    <SwiperSlide>
      <div className="testimonial__card">
        <div className="image">
          <div className="image_center">
            <img src="/assets/images/persons/rae.jpg" alt="" />
          </div>
        </div>
        <div className="card_header">
          <h3 className="title">Roberto Agurto</h3>
          <span className="caption">ceo wellnessPro</span>
        </div>
        <div className="card_body">
          <p className="paragraph">
            Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo maiores
            illo expedita iusto illum quibusdam aspernatur saepe. Rerum
            consequatur eos velit in. Rerum aut laudantium optio. Velit odit
            amet.
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="testimonial__card">
        <div className="image">
          <div className="image_center">
            <img src="/assets/images/persons/rae.jpg" alt="" />
          </div>
        </div>
        <div className="card_header">
          <h3 className="title">Roberto Agurto</h3>
          <span className="caption">ceo wellnessPro</span>
        </div>
        <div className="card_body">
          <p className="paragraph">
            Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo maiores
            illo expedita iusto illum quibusdam aspernatur saepe. Rerum
            consequatur eos velit in. Rerum aut laudantium optio. Velit odit
            amet.
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="testimonial__card">
        <div className="image">
          <div className="image_center">
            <img src="/assets/images/persons/jeanpaul.jpg" alt="" />
          </div>
        </div>
        <div className="card_header">
          <h3 className="title">Jean Paul</h3>
          <span className="caption">ceo JeanPaulCoach</span>
        </div>
        <div className="card_body">
          <p className="paragraph">
            Pariatur aut ut. Et voluptates voluptatem ut quae. Explicabo maiores
            illo expedita iusto illum quibusdam aspernatur saepe. Rerum
            consequatur eos velit in. Rerum aut laudantium optio. Velit odit
            amet.
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>
```

### css code

```scss
/* variables */
$size-avatar: 200px;

.testimonial {
  margin: 50px auto;
  &__card {
    margin: 25px auto;
    border-radius: 25px;
    padding: 10px;
    width: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: -1px 2px 40px -20px rgba(0, 0, 0, 1);
    /* avatar */

    .image {
      box-shadow: -1px 2px 40px -20px rgba(0, 0, 0, 1);
      margin: 25px;
      width: $size-avatar;
      height: $size-avatar;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &_center {
        overflow: hidden;
        width: $size-avatar - 20px;
        height: $size-avatar - 20px;
        padding: 5px;
        border-radius: 50%;
        position: relative;
        img {
          position: absolute;
          width: 100%;
          left: 0px;
          top: 0px;
        }
      }
    }
    /* body card */
    .card_header {
      padding: 15px 0;
      text-align: center;
      .caption {
        color: rgba($color: black, $alpha: 0.5);
      }
    }
    .card_body {
      padding: 0 5px;
      p {
        text-align: center;
        padding: 10px 10px;
      }
    }
  }
}
```
