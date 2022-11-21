import { useSelector } from 'react-redux';
import { getAuthDataState } from 'entity/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

function RequireAuth({ children }: {children: JSX.Element}) {
    const isAuth = useSelector(getAuthDataState);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;
