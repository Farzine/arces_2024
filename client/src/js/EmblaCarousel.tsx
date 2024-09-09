import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options); 
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  const startAutoplay = useCallback(() => {
    if (autoplayInterval.current) return; // Prevent multiple intervals

    autoplayInterval.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);

    // Start autoplay
    startAutoplay();

    return () => {
      // Clean up autoplay on unmount
      stopAutoplay();
    };
  }, [emblaApi, tweenParallax, startAutoplay, stopAutoplay]);


  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', handleSelect);
    handleSelect();

    return () => {
      emblaApi.off('select', handleSelect);
    };
  }, [emblaApi]);

  const pictures = [
    {
      src: '/1.jpg',
      description: 'Sust Grafiti',
      location: 'Location 1'
    },
    {
      src: '/2.webp',
      description: 'Sust Grafiti',
      location: 'Location 2'
    },
    {
      src: '/3.webp',
      description: 'Description for Image 3',
      location: 'Location 3'
    },
    {
      src: '/5.webp',
      description: 'Description for Image 3',
      location: 'Location 3'
    },
    {
      src: '/6.webp',
      description: 'Description for Image 3',
      location: 'Location 3'
    },
    // Add more slides as needed
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {pictures.map((picture, index) => (
            <div
              className={`embla__slide ${index === selectedIndex ? 'embla__slide--center' : ''}`}
              key={index}
            >
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={picture.src}
                    alt={picture.description}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === currentIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      <div>
      <div className="embla__description">
        {pictures[currentIndex].description}
      </div>
      <div className='embla__location'>
      {pictures[currentIndex].location}
      </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
