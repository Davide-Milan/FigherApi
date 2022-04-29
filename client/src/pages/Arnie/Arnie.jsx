import React from 'react';
import './Arnie.css'
import ArniaTile from '../../components/ArniaTile';

const Arnie = () => {

    const [valori, setValori] = React.useState([])
    React.useEffect(() => {
        fetch('http://192.168.1.4:3001/').then(response => response.json())
        .then(data => {
            console.log(data)
            return setValori(data)}
        )
    },[])
    
    const renderArnie = () =>{
        return valori.map(data => (<ArniaTile key={data.id} valori_tile={data} />) )
    }

    return (
        <main>
            <h1 className='title'>Arnie</h1>
            <ul className='arnie'>
                {renderArnie()}
            </ul>
        </main>
    );
}

export default Arnie;
