import {Routes, Route} from "react-router-dom"
import Main from "../pages/Main";
import FilmYear from "../components/filmYear/FilmYear";
import FilmInfo from "../components/filmInfo/FilmInfo";


const AppRouter = () => {
return ( 

<>


{/* <Header /> */}

<Routes>

<Route path="/"  element={ <Main /> } >

<Route path="filmYear" element={ <FilmYear /> } />
<Route path="filmInfo" element={ <FilmInfo /> } />

</Route>

</Routes>

</>

)};

export default AppRouter;
