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
                    <li className='data__item'>
                        <label htmlFor='luogo' className="data__type">Luogo</label>
                        <input type='text' className="data input" id='luogo' name='luogo' value={valori[0]} onChange={cambioLuogo}/>
                    </li>
                    <li className='data__item'>
                        <label htmlFor='ultimaVisita' className="data__type">Ultima visita</label>
                        <input type='date' className="data input" id='ultimaVisita' name='ultimaVisita' value={valori[1]} onChange={cambioUltimaVisita} />
                    </li>
                    <li className='data__item'>
                        <label htmlFor='lastre' className="data__type">Numero lastre</label>
                        <input type='number' className="data input" id='lastre' name='lastre' value={valori[2]} onChange={cambioNumeroLastre}/>
                    </li>
                    <li className='data__item'>
                        <label htmlFor='nota' className="data__type">Nota</label>
                        <input type='text' className="data input" id='nota' name='nota' value={valori[3]} onChange={cambioNota}/>
                    </li>
                </ul>
                <div className="data__buttons">
                    <button className='data__button' type='button' onClick={editMode}>Annulla</button>
                    <button className='data__button' type="submit">Salva</button>
                </div>
            </form>

            :
            
            <div className='data__list__wrapper'>
            <ul className="data__list">
                <li className='data__item'>
                    <h3 className="data__type">Luogo</h3>
                    <p className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis omnis quos, dignissimos reprehenderit fugit maiores dolorum perspiciatis quo facere.</p>
                </li>
                <li className='data__item'>
                    <h3 className="data__type">Ultima visita</h3>
                    <p className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis omnis quos, dignissimos reprehenderit fugit maiores dolorum perspiciatis quo facere.</p>
                </li>
                <li className='data__item'>
                    <h3 className="data__type">Numero lastre</h3>
                    <p className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis omnis quos, dignissimos reprehenderit fugit maiores dolorum perspiciatis quo facere.</p>
                </li>
                <li className='data__item'>
                    <h3 className="data__type">Nota</h3>
                    <p className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis omnis quos, dignissimos reprehenderit fugit maiores dolorum perspiciatis quo facere.</p>
                </li>
            </ul>
            <div className="data__buttons"><button className='data__button' type='button' onClick={editMode}>Modifica</button></div>
            </div>
            }            
        </main>
    );
}

export default Arnia;
