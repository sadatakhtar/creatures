import React from 'react';
import './ReturnDisplayData.css';


function ReturnDisplayData({ fetchedData}) {
    return (
        <div className="returndata">
            <h2>Display Animals in database</h2><br/>
            <div>
                {fetchedData.map((e, i) => {
                    return (
                    <p className="returndata_data">
                        {`Id: ${e.id}`} <br/> 
                        {`Name:${e.name}`}<br/>
                        {`Animal:  ${e.animal}`} <br/>
                        {`Legs: ${e.legs}`}
                    </p>
                  
                    )
                })}
            </div>

            
        </div>
    )
}

export default ReturnDisplayData
