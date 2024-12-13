import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from "./afterLogin/Home/Home";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route exact path="" element={< Home />} />

        </>
    )
);

export default router