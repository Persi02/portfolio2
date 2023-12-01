
import { ElementType } from 'react';

interface Itext {
    tag: ElementType,
    text: string,
    className?: string,
    size?: string,
    weight?: string,
    color?: string
}

function Text({ tag, text, className, size, color }: Itext) {
    const Tag = tag;

    return (
        <Tag className={className} size='16px' color='black'
            style={{ fontSize: size, color: color }}>
            {text}
        </Tag>
    )
}

export default Text