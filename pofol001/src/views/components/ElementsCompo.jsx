import '../css/Elements.css'
const ElementComponent = ({ element }) => {
    return (
        <div className="element"
            style={{
                "--group": element.group,
                "--period": element.period,
                color: element.state === "Gas" ? '#D32F2F' : 
                element.state === "Liquid" ? '#1976D2' : 
                '#212121', 
                backgroundColor: 
                element.type === "Metalloid" ? '#FFEB3B' :     
                element.type === "Metal" ? '#B0BEC5':          
                element.type === "Non-metal" ? '#E0E0E0':       
                element.type === "Lanthanide" ? '#BA68C8':      
                element.type === "Actinide" ? '#4CAF50':       
                '#FFFFFF'                                       
            }}
        >
            <span className="atomic-number">{element.atomicNumber}</span>
            <span className="symbol">{element.symbol}</span>
            <span className="name">{element.name}</span>
        </div>
    );
};

export default ElementComponent;
