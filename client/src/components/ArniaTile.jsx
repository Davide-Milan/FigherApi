import React from 'react';

const ArniaTile = ({valori_tile}) => {
    const {id, luogo, nota, trattamento, numero_melari, colore, ultima_visita} = valori_tile
    return (
        <li className={`arnia__tile tile ${nota != '' ? 'nota': ''}`}><a className='arnia__tile__link' href={`arnia/${id}`}>
                    <h2 className='arnia__tile__title'>{id ? '#' + id : '#...'} - {luogo ? luogo : 'Caricando...'}</h2>
                    <ul className="arnia__tile__info__list">
                        {nota
                            ? 
                            <li className="arnia__tile__info">
                                <h3 className="arnia__tile__info__title">Nota</h3>
                                <p className="arnia__tile__info__content">{nota}</p>
                            </li>
                            :
                            ''
                        }
                        
                        {trattamento 
                        ?
                        <li className="arnia__tile__info">
                            <h3 className="arnia__tile__info__title">Trattamento</h3>
                            <p className="arnia__tile__info__content"> {trattamento}</p>
                        </li>
                        :
                        ''
                        }

                        <li className="arnia__tile__info">
                            <h3 className="arnia__tile__info__title">Melari</h3>
                            <p className="arnia__tile__info__content">{numero_melari ? (numero_melari > 0 ? ('✅ ' + numero_melari) : '❌ Assente') : 'Caricando...'}</p>
                        </li>
                        <li className="arnia__tile__info">
                            <h3 className="arnia__tile__info__title">Regina</h3>
                            <p className="arnia__tile__info__content">{colore ? ('✅ ' + colore) : '❌ Assente'}</p>
                        </li>                                
                        <li className="arnia__tile__info">
                            <h3 className="arnia__tile__info__title">Ultima visita</h3>
                            <p className="arnia__tile__info__content">{ultima_visita ? ultima_visita.substr(0,10) : 'Non ancora visitato'}</p>
                        </li>
                    </ul>
                </a></li>
    );
}

export default ArniaTile;
