import { createContext } from "react";
import { useState } from "react";


const BooksContext= createContext();

function Provider({children}){
 
 
return (<BooksContext.Provider value={{}}>
    {children}
    </BooksContext.Provider> 
);
 }

export {Provider};
export default BooksContext;

 //para importar ambas ahora lo que voy a poder hacer es: 
 // import BooksContext, {Provider } from "./dhfkahdfkj"



