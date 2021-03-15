
const Results = ({ data }) => {

  return (
    <div className="search-params__results">
      {!data.main ? (
        <h1>No Weather Found</h1>
      ) : (
        <div>
          <p>Temp: {data.main.temp}</p>
          <p>Feels Like: {data.main.feels_like}</p>
          <p>Temp Min: {data.main.temp_min}</p>
          <p>Temp Max: {data.main.temp_max}</p>
        </div>
      )}
    </div>
  );
};

export default Results;