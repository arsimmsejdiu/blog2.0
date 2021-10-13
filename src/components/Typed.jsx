import Typed from 'react-typed';

function TypedDiv() {
    return (
        <div className="w-[400px]">
            <Typed 
                strings={["I'm <strong className='text-red-400'>Leutrim </strong>Olluri", "I am a <div className='text-red-400'>software engineer</div>.", "I am an <div className='text-red-400'>entrepreneur</div>"]}
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
