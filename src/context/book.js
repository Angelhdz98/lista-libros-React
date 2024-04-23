import { createContext } from "react";
import { useState, useCallback } from "react";
import axios from "axios";


const BooksContext= createContext();

function Provider({children}){

    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () => {
        const response= await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    },[]) ;
    const createBook = async (title)=>{
        
        const response = await axios.post('http://localhost:3001/books', {
            title,
       });

       //setBooks([...books,{ id :Math.round(Math.random()*10000) , title:title }]);
        setBooks([...books, response.data])
       
   };
   const deleteBookById= async (id)=>{
       await axios.delete(`http://localhost:3001/books/${id}`) 
       const updatedBooks= books.filter((book)=>{
           return book.id !== id; 
       })
       setBooks(updatedBooks)

   }
   const editBookById =  async (id, newTitle )=>{
       // const updatedBooks = books.map((book)=>{
       //     if (book.id === id){
       //         return {...book, title: newTitle }
       //     }
       //     return book; 
       // })
       // setBooks(updatedBooks);

       const response = await axios.put(`http://localhost:3001/books/${id}`,{
           title: newTitle,
       });

       
       console.log(response);
         
       const updatedBooks = books.map((book)=>{
           if (book.id ===  id ){
               return {...book,...response.data};
           }
           return book;
       });
       setBooks(updatedBooks);

   };

 const valueToShare = {
    books: books,
    deleteBookById:deleteBookById,
    editBookById:editBookById,
    createBook: createBook,
    fetchBooks: fetchBooks
 };
 
return (<BooksContext.Provider value={valueToShare}>
    {children}
    </BooksContext.Provider> 
);
 }

export {Provider};
export default BooksContext;

 //para importar ambas ahora lo que voy a poder hacer es: 
 // import BooksContext, {Provider } from "./dhfkahdfkj"



