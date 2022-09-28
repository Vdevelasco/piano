
import * as Tone from 'tone'
import {createRoot} from 'react-dom/client'

const synth = new Tone.Synth().toDestination();
       
let notes = ['c4','c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5']
let notesKeys = {'a': 'c4' ,'w': 'c#4', 's':'d4', 'e':'d#4', 'd':'e4', 'f':'f4', 't': 'f#4',
                     'g':'g4', 'y':'g#4', 'h':'a4', 'u':'a#4', 'j':'b4', 'k':'c5', 'o':'c#5', 'l':'d5', 'p':'d#5', 'ñ':'e5', '´':'f5'}


function noteSound(event){
    synth.triggerAttackRelease(notesKeys[event.key.toLowerCase()], "8n")
}

document.getElementById('body').addEventListener('keydown', noteSound)

function PianoKey(props){
    return <button 
            className={props.note.length==2?'white':'black'}
            onClick={() => synth.triggerAttackRelease(props.note, "8n")} id={props.note}>
            {props.note}
           </button>
}

//Componente react (con clases o funciones, generalmente fucniones)

function PianoKeys()
{
    return notes.map(note => <PianoKey key = {note} note={note} />   ) 
}

//Siempre es asín
const root = createRoot(document.getElementById('root'));
root.render(<PianoKeys/>) //jsx