import React from 'react';
import './Arnie.css'

const Arnie = () => {

    return (
        <main>
            <h1 className='title'>Arnie</h1>
            <ul className='arnie'>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/1"><h2 className="arnia__link__title">1</h2></a></li>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/2"><h2 className="arnia__link__title">2</h2></a></li>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/3"><h2 className="arnia__link__title">3</h2></a></li>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/4"><h2 className="arnia__link__title">4</h2></a></li>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/5"><h2 className="arnia__link__title">5</h2></a></li>
                <li className="arnia__tile"><a className='arnia__link' href="arnie/6"><h2 className="arnia__link__title">6</h2></a></li>
            </ul>
        </main>
    );
}

export default Arnie;
