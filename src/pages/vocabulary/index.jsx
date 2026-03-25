import { archive as slangArchive } from '@/components/library'
import styles from './vocabulary.module.css'

export default function VocabularyPage() {
    console.log('slangArchive', slangArchive)    
    
    return <div className={styles.page}>
        <div className={styles.title}>
            Terminologia Skater
        </div>
        
        {Object.keys(slangArchive).map( (word) => {
            const slang = slangArchive[word]
            return <div className={styles.slang}>
                <div>{word}</div>
                <div>{slang.content}</div>
                <div>
                    {slang.images.map((image, index) => (
                        <img 
                        src={`/library/${image}`}
                        />   
                        ))}
                </div>
            </div>
        })}
        {/*
            */}
    </div>
}