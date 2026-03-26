import { archive as slangArchive } from '@/components/library'
import styles from './vocabulary.module.css'
import { SlangDetector } from '@/components/slang-detector'
import { Carousel } from './carousel'

export default function VocabularyPage() {
    //console.log('slangArchive', slangArchive)    
    
    return <div className={styles.page}>
        <div className={styles.title}>
            Terminologia Skater
        </div>
        
        {Object.keys(slangArchive).map( (word) => {
            const slang = slangArchive[word]
            return <div className={styles.slang}>
                <div>
                    <div className={styles.subtitle}>{word}</div>
                </div>
                <div
                className={styles.content}
                style={{
                    gridTemplateColumns: slang.images.length===0
                        ? '1fr 0fr' : '5fr 3fr'
                }}
                >
                    <SlangDetector text={slang.content} />
                    <div className={styles.carouselWrapper}>
                        <Carousel data={slang.images}/>
                    </div>
                </div>
                {/*
                <div>
                    {slang.images.map((image, index) => (
                        <img 
                        src={`/library/${image}`}
                        />   
                        ))}
                </div>
                */}
            </div>
        })}
        {/*
            */}
    </div>
}