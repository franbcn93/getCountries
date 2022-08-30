import React from "react";
import es from '../img/es.png';
import fr from '../img/fr.png';
import it from '../img/it.png';
import pt from '../img/pt.png';


export const Cards = ({ tiendas }) => {
  
    return (
    <div class="row">
      {Object.keys(tiendas).map((a) => (
        <div key={a}>
            {Object.keys(tiendas[a].cities).map((b) => (
              <div>
                {Object.keys(tiendas[a].cities[b].shops).map((c) => (            
                  <div class="column card">
                      {(tiendas[a].name)==='España' ? <img src={es} style={{maxWidth:"24%"}}/> : 
                        (tiendas[a].name)==='Francia' ? <img src={fr} style={{maxWidth:"24%"}}/> : 
                        (tiendas[a].name)==='Italia' ? <img src={it} style={{maxWidth:"24%"}}/> :
                        <img src={pt} style={{maxWidth:"24%"}}/> 
                      }
                        <h3>{tiendas[a].name} ({tiendas[a].cities[b].name})</h3>
                        <p key={a}>{tiendas[a].cities[b].shops[c].name}</p>
                        <p>{tiendas[a].cities[b].shops[c].zipcode}</p>
                        <p>Lat: {tiendas[a].cities[b].shops[c].center_point[0].substr(0, 6)}; 
                          Long: {tiendas[a].cities[b].shops[c].center_point[1].substr(0, 7)}</p>
                        {/* <p>{tiendas[a].cities[b].shops[c].images_full_path[150]}</p> */}
                        <img src={tiendas[a].cities[b].shops[c].images_full_path[150]} style={{maxWidth:"24%"}}/>
                  </div>
                ))}
              </div>
            ))}
        </div>
        ))}
    </div>
    );
  };