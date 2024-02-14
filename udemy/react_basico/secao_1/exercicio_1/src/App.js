import './App.css';

function App() {
  // filmes
    const movies = [
      {
          title: 'The Shawshank Redemption',
          year: 1994,
          rating: 4.7
      },
      {
          title: 'The Godfather',
          year: 1972,
          rating: 4.5
      },
      {
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          year: 2001,
          rating: 4.4
      },
      {
          title: 'The Matrix',
          year: 1999,
          rating: 4.4
      },
    ];
  return (    
    <>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Ano</th>
            <th>Votacao</th>
          </tr>
        </thead>
        <tbody>
          { movies.length > 0 ? (
            movies.map((movie, key) => 
              <tr key={key}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={3}>
                Nenhum filme encontrado
              </td>
            </tr>
          )

          }
        </tbody>
      </table>
    </>
  );
}

export default App;
