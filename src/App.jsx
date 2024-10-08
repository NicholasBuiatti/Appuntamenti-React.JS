import List from "./List";
import data from "./data";
import { useState } from "react";

import './App.css'
import Button from 'react-bootstrap/Button';
function App() {
	const [appuntamento, setAppuntamento] = useState(data);
	// test commit
	let reloded = () => setAppuntamento(data);
	let deleteAll = () => {
		return setAppuntamento([]);
	}

	// AGGIORNIAMO IL VALORE APPUNTAMENTO DELLO USESTATE CON IL SETAPPUNTAMENTO AGGIORNANDO IL VALORE ATTUALE DI APPUNTAMENTO (OVVERO DATA) CICLANDO CON.FILTER CHE CI PERMETTE DI RICEVERE (CICLANDO SU OGNI ELEMENTO CHIAMATO VALUE) INDIETRO UN ARRAY CON GLI OGGETTI CHE SODDISFANO LA REGOLA CHE IO DO
	let deleteAppuntamento = (id) => {
		setAppuntamento((oldValue) => oldValue.filter((value) => value.id !== id))
	}
	return (
		<>
			<section className="container text-center text-white">
				<h1 className="fs-1 my-4">Prossimi incontri</h1>

				{/* data è l'oggetto che userò per in props. data contiene appuntamento che è l'array */}
				{/* QUA è COME SE CAMBIASSI IL NOME DELLA FUNZIONE DELETEAPPUNTAMENTO IN CANCELLA */}
				<List data={appuntamento} cancella={deleteAppuntamento} />

				<div className="row justify-content-around pt-3">
					<Button onClick={reloded} variant="outline-primary col-2">Reloded</Button>
					<Button onClick={deleteAll} variant="outline-danger col-2">Delete all</Button>
				</div>
			</section>
		</>
	)
}


export default App
