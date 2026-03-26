import { Slang } from '@/components/skate-slang'
import { v4 as uuidv4 } from 'uuid'
import { archive } from '@/components/library'

export function SlangDetector ({ text }) {
    const highlight = 'baranda'

    if (!highlight.trim()) {
        return <span>{text}</span>;
    }

    const exp = '(' + Object.keys(archive).join(')|(') + ')'

    // Use a regular expression with the 'gi' flags for global, case-insensitive matching
//    const regex = new RegExp(`(${highlight})`, 'gi');
    const regex = new RegExp(exp, 'gi');

    const parts = text.split(regex).filter(p => p!=undefined);
    
    console.log('parts', parts)
    console.log('regex', regex)

    return (
        <div>
        {parts.map(part => {
            // Check if the current part matches the highlight (case-insensitive)
            if (regex.test(part)) {
            return (
                <Slang 
                key={uuidv4()}
                word={part}
                />
            );
            }
            return <span key={uuidv4()}>{part}</span>;
        })}
        </div>
    );
};
