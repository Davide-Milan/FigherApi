import React from 'react';
import { useParams } from 'react-router-dom';
import './Arnie.css'

const Arnia = () => {
    let{param} = useParams()
    const [editing, setEditing] = React.useState(false)
    const [valori, setValori] = React.useState(['kfnhgkfnb', '2000-03-16', '2', 'asdsad'])

    React.useEffect(() => {
        // Fetch post using the parm
    }, [param]);

    const editMode = () =>{
        setEditing(!editing)
    }
    const cambioLuogo = e => {
        setValori(prevvalori =>{
            const tmp = [...prevvalori]
            tmp[0] = e.target.value
            return(tmp)
        })
    }
    const cambioUltimaVisita = e => {
        setValori(prevvalori =>{
            const tmp = [...prevvalori]
            tmp[1] = e.target.value
            return(tmp)
        })
    }
    const cambioNumeroLastre = e => {
        setValori(prevvalori =>{
            const tmp = [...prevvalori]
            tmp[2] = e.target.value
            return(tmp)
        })
    }
    const cambioNota = e => {
        setValori(prevvalori =>{
            const tmp = [...prevvalori]
            tmp[3] = e.target.value
            return(tmp)
        })
    }


    return (        
        <main>
            <h1 className='title'>Arnia #{param}</h1>
            {editing 
            ?
            <form action='/arnie' className="data__list__wrapper">
                <ul className="data__list">
                    <fieldset className='data__fieldset'>
                        <legend className='data__title'>Dati Arnia</legend>
                        <li className='data__item'>
                            <label htmlFor='luogo' className="data__type">Luogo</label>
                            <input type='text' className="data input" id='luogo' name='luogo' value={valori[0]} onChange={cambioLuogo}/>
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
                            <input className='data input' type="number" id="scorta" name="scorta" value="0"/>
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
                    <button className='data__button' type='button' onClick={editMode}>Annulla</button>
                    <button className='data__button' type="submit">Salva</button>
                </div>
            </form>

            :
            
            <div className='data__list__wrapper'>
                <ul className="data__list">
                    <h2 className='data__title'>Dati Arnia</h2>
                    <li className='data__item'>
                        <h3 className="data__type">Luogo</h3>
                        <p className="data">Istrana</p>
                    </li>
                    <li className='data__item'>
                        <h3 className="data__type">Ultima visita</h3>
                        <p className="data">16/03/2000</p>
                    </li>
                    <li className='data__item'>
                        <h3 className="data__type">Trattamento</h3>
                        <p className="data">Non so cosa venga scritto per un trattamento, ma io scrivo così per esempio</p>
                    </li>
                    <li className='data__item'>
                        <h3 className="data__type">Nota</h3>
                        <p className="data">bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla</p>
                    </li>
                </ul>

                <br/><br/><br/>
                <ul className="data__list--flex">
                    
                        <ul className="data__list">
                            <h2 className='data__title'>Regina</h2>
                            <li className='data__item'>
                                <h3 className="data__type">Colore</h3>
                                <p className="data">Rosso</p>
                            </li>
                            <li className='data__item'>
                                <h3 className="data__type">Data di nascita</h3>
                                <p className="data">16/03/2000</p>
                            </li>
                        </ul>
                            

                    
                        <ul className="data__list">
                            <h2 className='data__title'>Telai</h2>
                            <li className='data__item'>
                                <h3 className="data__type">Scorta</h3>
                                <p className="data">0</p>
                            </li>
                            <li className='data__item'>
                                <h3 className="data__type">Covata</h3>
                                <p className="data">0</p>
                            </li>
                        </ul>
                    
                </ul>

                <br/><br/><br/>
                <ul className="data__list--flex">
                    <ul className="data__list">
                        <h2 className="data__title">Melario 1</h2>
                        <li className='data__item'>
                            <h3 className='data__type'>Miele</h3>
                            <p className="data">0</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Vuoti</h3>
                            <p className="data">0</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Da costruire</h3>
                            <p className="data">0</p>
                        </li>
                    </ul>

                    <ul className="data__list">
                        <h2 className="data__title">Melario 2</h2>
                        <li className='data__item'>
                            <h3 className='data__type'>Miele</h3>
                            <p className="data">2</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Vuoti</h3>
                            <p className="data">2</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Da costruire</h3>
                            <p className="data">2</p>
                        </li>
                    </ul>

                    <ul className="data__list">
                        <h2 className="data__title">Melario 3</h2>
                        <li className='data__item'>
                            <h3 className='data__type'>Miele</h3>
                            <p className="data">3</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Vuoti</h3>
                            <p className="data">3</p>
                        </li>
                        <li className='data__item'>
                            <h3 className='data__type'>Da costruire</h3>
                            <p className="data">3</p>
                        </li>
                    </ul>
                </ul>



                <div className="data__buttons">
                    <button className='data__button' type='button' onClick={editMode}>Modifica</button>
                </div>
            </div>
            }            
        </main>
    );
}

export default Arnia;
