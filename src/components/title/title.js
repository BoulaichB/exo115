import React from 'react';
import './public/css/app.css';


// ## Crée deux components :
//     - Title
//     - Picture

// ### Dans le component Title, crée une function avec deux paramètres
// * Dans cette function, return un h1 avec le premier paramètre et un p avec le deuxième paramètre (n'oublie pas d'exporter la function)
// * Import ta function dans l'App et donne des valeurs au deux paramètres du component Title

// ### Dans le component Picture, crée une function avec deux paramètres
// * Dans cette function, return deux balises img avec comme src le paramètre
// * Import le component dans l'App et donne les valeur aux paramètres (donne lui une valeur avec le lien url d'une image et l'autre avec le src d'une image dans le dossier img)

const Title = ({_param1, _param2}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">{_param1}</h1>
        <p>{_param2}</p>
    </div>
    
  )
}

export default Title