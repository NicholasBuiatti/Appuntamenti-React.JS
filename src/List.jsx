
import PropTypes from 'prop-types';
const List = (props) => {
    // console.log(props.delete);
    // const lista = props.data;
    return (
        <section className="container">
            <ul className='bg-dark col-8 mx-auto rounded'>
                {/* PRENDO L'ARRAY DATA DALLE PROPS DEL COMPONENTE PADRE E CICLO CON .MAP */}
                {props.data.map((el) => {
                    return (
                        <li key={el.id} className='list-group-item'>
                            <Person {...el} deleteApp={props.cancella} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

// VALIDAZIONI PER LE PROPS DATA è UN ARRAY RICHIESTO
List.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // o stringa, a seconda del tuo id
            nome: PropTypes.string.isRequired,
            stato: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
    cancella: PropTypes.func.isRequired,
};

// RINOMINO LA FUNZIONE DA CANCELLA A DELETEAPP
const Person = ({ id, nome, stato, img, deleteApp }) => {
    return (
        <div className="row align-items-center px-3 py-4">
            <div className='ratio ratio-1x1 p-2' style={{ width: '5rem' }}>
                <img className='rounded-circle obj-contain shadow' src={img} alt="" />
            </div>
            <div className='col-8 text-start fs-6'>
                <h3>{nome}</h3>
                <p className='mb-0'>{stato}</p>
            </div>
            <div className='col-2 text-end align-items-end'>
                <button onClick={() => deleteApp(id)} className='btn btn-danger'>X</button>
            </div>
        </div>
    )
}

// VALIDAZIONI PER LE PROPS NOME STATO E IMG RICHIESTI COME STRINGA
Person.propTypes = {
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    stato: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    deleteApp: PropTypes.func.isRequired, // Questo corrisponde al nome rinominato
};

export default List