

const StatCard = ({title,value}) => {
      return (
           <div className="card">
             <h3>Title: {title}</h3>
            <p>Value: {value}</p>
    </div>
      );
};

export default StatCard;