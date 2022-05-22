import { Navigate } from 'react-router-dom';

function PrivateRoute({ children } : any) {
    const auth = localStorage.getItem('user');
    return auth ? children : <Navigate to={{pathname: "/login"}}/>;
}

export default PrivateRoute;