import React, { useEffect, useState } from "react";
import "./App.css"
export default function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
      .then((res) => res.json())
      .then((json) => setNutri(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => (
        <article key={item.id}>
          <strong>{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} />
          <p>{item.subtitulo}</p>
          <button>Acessar</button>
        </article>
      ))}
    </div>
  );
}
