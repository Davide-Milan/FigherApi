import React from 'react';

const ArniaEditform = (props) => {

    const [valori, setValori] = React.useState(props.valori)
    
    const cambioLuogo = e => {
        // setValori(prevValori =>{
        //     const tmp = [...prevValori]
        //     tmp[0] = e.target.value
        //     return(tmp)
        // })
        console.log('ciao')
    }
    const cambioUltimaVisita = e => {
        // setValori(prevValori =>{
        //     const tmp = [...prevValori]
        //     tmp[1] = e.target.value
        //     return(tmp)
        // })
        console.log('ciao')
    }
    const cambioNumeroLastre = e => {
        // setValori(prevValori =>{
        //     const tmp = [...prevValori]
        //     tmp[2] = e.target.value
        //     return(tmp)
        // })
        console.log('ciao')
    }
    const cambioNota = e => {
        // setValori(prevValori =>{
        //     const tmp = [...prevValori]
        //     tmp[3] = e.target.value
        //     return(tmp)
        // })
        console.log('ciao')
    }

console.log(valori.luogo)
    return (
        <form action='/' method='get' className="data__list__wrapper">
            <ul className="data__list tile">
                <fieldset className='data__fieldset'>
                    <legend className='data__title'>Dati Arnia</legend>
                    <li className='data__item'>
                        <label htmlFor='luogo' className="data__type">Luogo</label>
                        <input type='text' className="data input" id='luogo' name='luogo' value={valori.luogo} onChange={cambioLuogo}/>
                    </li>
                    <li className='data__item'>
                        <label htmlFor='ultimaVisita' className="data__type">Ultima visita</label>
                        <input type='date' className="data input" id='ultimaVisita' name='ultimaVisita' value={valori[1]} onChange={cambioUltimaVisita} />
                    </li>
                    <li className='data__item'>
                        <label htmlFor='trattamento' className="data__type">Trattamento</label>
                        <input type='text' className="data input" id='trattamento' name='trattamento' value={valori[2]} onChange={cambioNota}/>
                    </li>
                    <li className='data__item'>
                        <label htmlFor='nota' className="data__type">Nota</label>
                        <input type='text' className="data input" id='nota' name='nota' value={valori[3]} onChange={cambioNota}/>
                    </li>
                </fieldset>
                <fieldset className='data__fieldset'>
                    <legend className='data__title'>Regina</legend>
                    <li className="data__item">
                        <label className='data__type' htmlFor="colore">Colore</label>
                        <input className='data input' type="number" id="colore" name="colore" value="0"/>
                    </li>
                    <li className="data__item">
                        <label className='data__type' htmlFor="nascita">Data di nascita</label>
                        <input className='data input' type="number" id="nascita" name="nascita" value="0"/>
                    </li>
                </fieldset>
                <fieldset className='data__fieldset'>
                    <legend className='data__title'>Telai</legend>
                    <li className="data__item">
                        <label className='data__type' htmlFor="scorta">Telai scorta</label>
                        <input className='data input' type="number" id="scorta" name="scorta"/>
                    </li>                        
                    <li className="data__item">
                        <label className='data__type' htmlFor="covata">Telai covata</label>
                        <input className='data input' type="number" id="covata" name="covata" value="0"/>
                    </li>                        
                </fieldset>
                <fieldset className='data__fieldset'>
                    <legend className='data__title'>Melari</legend>
                    <fieldset className='data__fieldset'>
                        <legend className='data__list__title'>Melario 1</legend>
                        <li className="data__item">
                            <label className='data__type' htmlFor="miele">Telai con miele</label>
                            <input className='data input' type="number" id="miele" name="miele" value="0"/>
                        </li>
                        <li className="data__item">
                            <label className='data__type' htmlFor="vuoti">Telai vuoti</label>
                            <input className='data input' type="number" id="vuoti" name="vuoti" value="0"/>
                        </li>
                        <li className="data__item">
                            <label className='data__type' htmlFor="da_costruire">Telai da costruire</label>
                            <input className='data input' type="number" id="da_costruire" name="da_costruire" value="0"/>
                        </li>
                    </fieldset>
                </fieldset>
            </ul>
            <div className="data__buttons">
                <button className='data__button' type='button' onClick={props.editMode}>Annulla</button>
                <button className='data__button' type="submit">Salva</button>
            </div>
        </form>
    );
}

export default ArniaEditform;
