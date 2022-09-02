import React from 'react'
import { useRef } from 'react'

export default function FormBook() {

    let refAutor = useRef();
    let refform = useRef();

    const submit = e => {
        console.log(e.target)
        e.preventDefault();

        const form = e.target;

        const data = new FormData(form)
        const json = Object.fromEntries(data.entries())
        console.log('autor', refAutor.current.value);


        console.log('data', json);

    }

    return (
        <div>

            <form ref={refform} onSubmit={submit}>
                <label>Autor:</label>
                <input ref={refAutor} type="text" name="autor" id="autor" />

                <label>Títulos:</label>
                <input type="text" name="titulo" id="titulo" />

                <label>Ano:</label>
                <input type="text" name="ano" id="ano" />

                <button type="submit">Enviar</button>
                <button type="reset">Limpar</button>
            </form>

        </div>
    )


}
