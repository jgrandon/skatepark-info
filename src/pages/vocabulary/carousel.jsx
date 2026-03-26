'use client'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'

export function Carousel ({data}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop:true,
        watchDrag: () => false
    })

    return(
        <div className={styles.imagesWrapper}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {data?.map((image, index) => (
                        <div
                        key={`tooltip-image-${index}`}
                        className={styles.embla__slide}
                        >
                            <img
                            src={`/library/${image}`}
                            width={150}
                            height={150}
                            />
                        </div>
                    ))}
                    {/*}
                    <div className={styles.embla__slide}>Slide 1</div>
                    <div className={styles.embla__slide}>Slice2</div>
                    <div className={styles.embla__slide}>Slice3</div>
                        */}
                </div>
            </div>
            <button className={styles.embla__prev} onClick={() => emblaApi.scrollPrev()}>{"<"}</button>
            <button className={styles.embla__next} onClick={() => emblaApi.scrollNext()}>{">"}</button>
        </div>
    )
}