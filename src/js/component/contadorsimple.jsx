import React from "react";
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';



function SimpleCounter(props){
    return( <div className="contador" >
            <div className="numeros">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuatro">{props.digito4 %10}</div>
            <div className="tres">{props.digito3 %10}</div>
            <div className="dos">{props.digito2 %10}</div>
            <div className="uno">{props.digito1 %10}</div>
    </div>  );
}

SimpleCounter.propTypes = {

    digito1: PropTypes.number,
    digito2: PropTypes.number,
    digito3: PropTypes.number,
    digito4: PropTypes.number

};

let Contador = 0;

setInterval(function(){

    const cuatro = Math.floor(Contador/1000);
    const tres = Math.floor(Contador/100);
    const dos = Math.floor(Contador/10);
    const uno = Math.floor(Contador/1);
   //console.log(cuatro, tres, dos, uno);
        Contador ++;
 
        ReactDOM.render(
        <SimpleCounter  digito1={uno} digito2={dos} digito3={tres} digito4={cuatro}/>,
        document.querySelector('.home')
    );
}, 1000);
export default SimpleCounter;
