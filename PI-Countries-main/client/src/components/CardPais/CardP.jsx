import { useState } from "react";
import { useSelector } from "react-redux";
import Countries from "../paises/Countrie";
import styles from "./cardp.module.css";

const CardP = () => {
  const users = useSelector((state) => state.allCountrie);
  const filter = useSelector((state) => state.filterCountrie);
  const limite_Pag = 10; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice del primer y último elemento en la página actual
  const indexFinal = currentPage * limite_Pag;
  const indexInicio = indexFinal - limite_Pag;

  // Obtener los elementos que se mostrarán en la página actual
  // mostrar las dos caras del filtro
  const visibleItems = filter.length > 0 ? filter : users;
  // visibilidad del punto de inicio o final
  const currentItems = visibleItems.slice(indexInicio, indexFinal);
  //slice() devuelve una copia de una parte del array dentro de un nuevo
  // array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

  // Calcular el número total de páginas
  // Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
  const totalPages = Math.ceil(visibleItems.length / limite_Pag);

  // Función para cambiar a una página específica
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Función para cambiar a la siguiente página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div >
      <div className={styles["gallery-container"]} >
      {currentItems.map((user) => {
        return (
          <Countries
            key={user.id}
            id={user.id}
            name={user.name}
            flag={user.flag}
            continents={user.continents}
            capital={user.capital}
            subregion={user.subregion}
            area={user.area}
            population={user.population}
            activities={user.activities}
          />
        );
      })}
      </div>
      {/* Mostrar los números de página y las flechas */}
      <div>
        {/* boton para ver la flechita < */}
        <button onClick={previousPage} disabled={currentPage === 1}>
          {"<"}
        </button>

        {/* array defrom que crea un objeto iterable o de una longitud especifica que seria el total de paginas  */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CardP;
