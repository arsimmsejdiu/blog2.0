import Typed from 'react-typed';

function TypedDiv() {
    return (
        <div>
            <Typed 
                strings={["I'm <strong className='orange'>Leutrim </strong>Olluri", "I am a <strong className='orange'>software engineer</strong>.", "I am an <strong className='orange'>entrepreneur</strong>."]}
                loop
                typeSpeed={80}
                backSpeed={20}
                smartBackspace
                backDelay={1000}
                loopCount={0}
                showCursor
                cursorChar='|'
            >
                
            </Typed>
            
        </div>
    )
}

export default TypedDiv
