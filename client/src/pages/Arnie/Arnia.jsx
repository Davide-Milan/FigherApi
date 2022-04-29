import React from 'react';
import { useParams } from 'react-router-dom';
import './Arnie.css'
import AriaEditForm from '../../components/ArniaEditForm';

const Arnia = () => {
    let{param} = useParams()
    const [editing, setEditing] = React.useState(false)
    const [valori, setValori] = React.useState([])
    
    
    React.useEffect(() => {
        fetch(`http://192.168.1.4:3001/arnia/${param}`).then(response => response.json())
        .then(data => {
            console.log(data)
            return setValori(data)}
        )
    },[])


    const editMode = () =>{
        setEditing(!editing)
    }
    

    return (        
        <main>
            <h1 className='title'>Arnia #{param}</h1>
            {editing 
            ?

            <AriaEditForm valori={valori} editMode={editMode}/>           

            :
            
            <div className='data__list__wrapper'>
                <ul className="data__list tile">
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
                    
                        <ul className="data__list tile">
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
                            

                    
                        <ul className="data__list tile">
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
                    <ul className="data__list tile">
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

                    <ul className="data__list tile">
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

                    <ul className="data__list tile">
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
