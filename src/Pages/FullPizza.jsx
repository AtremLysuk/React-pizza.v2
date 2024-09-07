import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () =>{
    const [pizza, setPizza] = React.useState();
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get('https://66a167e17053166bcabee9ee.mockapi.io/items/' + id);
                setPizza(data);
            } catch (error) {
                alert("ERRRORRRRR!!!");
                navigate("/");
            }
        };
        
        fetchPizza();
    }, []);

    if (!pizza) {
        return 'Loading...'
    }

    return(
        <div className='container'>
            <img src={pizza.imageUrl} alt="Image"/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price}</h4>
        </div>
    )
}

export default FullPizza;
