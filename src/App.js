// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FilmContextProvider from "./context/FilmContext";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div className="App">
   

 <FilmContextProvider>
  <AppRouter />
 </FilmContextProvider>

 


    </div>
  );
}

export default App;
