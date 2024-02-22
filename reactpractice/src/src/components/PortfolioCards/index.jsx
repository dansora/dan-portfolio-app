const PortfolioCards = (props) => {
// check props object
console.log(props);

// use props
return(
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.restName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{props.restPhone}</h6>
            <p className="card-text">{props.restAddress}</p>
        </div>
    </div>
  );
};


export default PortfolioCards;