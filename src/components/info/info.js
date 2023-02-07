import React from 'react';
import './public/css/app.css';

// ## Crée un component :
//     - Info

// ### Dans Info crée une function avec 4 paramètres
// * Dans l'App, crée un objet avec comme propriété (nom, age, taille et src)
// * Dans Info crée une card qui te représente avec comme image ->  paramètre 1, nom -> paramètre 2, age -> paramètre 3 et taille -> paramètre 4
// * Import ton component Info dans l'App et attribut des valeurs à ses 4 paramètres avec les valeurs de l'objet

const Info = ({_param1, _param2, _param3, _param4}) => {
  return (
    <div>
        <hr/>
        <div className='flex justify-center'>
            <div className='border-solid border-red-300 border rounded-lg w-2/12'>
                <div className='card-header w-full'>
                    <img src={_param1} alt="Me" className='w-full'/>
                </div>
                <div className='card-body w-full'>
                    <h3 className='text-center text-2xl font-bold'>{_param2}</h3>
                    <table className='w-full text-center'>
                        <tr>
                            <td className='bg-red-600 text-white font-semibold'>Age</td>
                            <td className='bg-red-400 text-white'>{_param3}</td>
                        </tr>
                        <tr>
                            <td className='bg-red-600 text-white font-semibold'>Taille</td>
                            <td className='bg-red-400 text-white'>{_param4}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Info