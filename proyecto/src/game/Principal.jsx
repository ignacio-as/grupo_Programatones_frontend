import { useEffect, useState } from 'react'
import '../assets/styles/Principal.css';
import Dado from './Dado.jsx'
import Navbar from '../common/Navbar.jsx'
import Tienda from './Tienda.jsx'
import Board from './Tablero/Tablero.jsx';
import { useParams } from 'react-router-dom';
import store_icon from '../assets/img/store2.png';
import coin_icon from '../assets/img/coin.png';
import axios from 'axios';


function Principal() {

    const { gameId } = useParams();
    const [MostrarTienda, setMostrarTienda] = useState(false);
    const [store, setStore] = useState(null);

    const handleMostrarTienda = () => {
        setMostrarTienda(!MostrarTienda);
    };

    const obtenerTienda = async (gameId) => {
        try {
            let id_juego = gameId;
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${id_juego}/store`);
            const tienda = response.data;
            setStore(tienda);
            console.log('Se pudo obtener la tienda asociada');
        } catch (error) {
            console.error('No se puedo obtener la tienda', error);
        };
    };

    useEffect(()=> {
        obtenerTienda(gameId);
    }, []);

    return (
        <>
        <Navbar/>

        <table>
            <tr>
                <td>
                    <div className='tablero'>
                        <div>
                            <button onClick={handleMostrarTienda} type="submit" className='boton-tienda'>
                                <img src={store_icon} alt="tienda" border="0"/>
                            </button>
                        </div>
                        <br></br>
                        <div>
                            {MostrarTienda ? (
                                <div className='tienda-container'>
                                    {MostrarTienda && <Tienda datos={store}/>}
                                </div>
                            ) : (
                                <div className='game-container'>
                                    <Board />
                                </div>
                            )}
                        </div>
                    </div>
                </td>
                <td>
                    <div className='resumen'>
                        <div className='monedas-wrapper'>
                            <img src={coin_icon} alt="monedas" width="70" height="70"/>
                            <h1 className='texto_principal'>0</h1>
                        </div>
                        <br></br>
                        <Dado/>
                    </div>
                </td>
            </tr>

        </table>
        </>
    )
}

export default Principal
