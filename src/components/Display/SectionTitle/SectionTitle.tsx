import './style.scss'

interface Isec {
    text: string,
    className: string
}


function SectionTitle({ text, className }: Isec) {
    return (
        <div className={`head_section  wrap ${className}`}>
            <h2 className='about_title'>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle