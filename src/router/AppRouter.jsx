import {routes} from "./routes.js"
import {Route, Routes, useLocation} from "react-router-dom"

const AppRouter = () => {
    const location = useLocation()
    return (
        <Routes location={location}>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component/>} />
            ))}
        </Routes>
    );
};

export default AppRouter;