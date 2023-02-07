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

const Picture = ({_param1, _param2}) => {
  return (
    <div>
        <img src={_param1} alt="First" />
        <img src={_param2} alt="Second" />
    </div>
  )
}

export default Picture