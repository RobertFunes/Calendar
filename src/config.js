import NavBar from './components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from './components/auth/auth';
function Config(){

    const state= useSelector(state=>state); 
    const dispatch=useDispatch();

    const handleLogout=()=>{
        dispatch(startLogout());
    }

    return(
        <div>
            <NavBar></NavBar>
            <h2>Id:</h2>
            <p>{state.auth.uid}</p>
            <h2>Nombre:</h2>
            <p>{state.auth.name}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}

export default Config;