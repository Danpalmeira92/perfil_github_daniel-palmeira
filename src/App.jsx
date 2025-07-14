import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario" 
import Reposlist from "./components/Reposlist"

function App() {
  const [inputUsuario, setInputUsuario] = useState('')
  const [nomeUsuario, setNomeUsuario] = useState('')

  const carregarPerfil = () => {
    setNomeUsuario(inputUsuario)
  }

  return(
    <>
  <p>Digite o nome de usuário do GitHub para carregar o perfil:</p>
    <input type="text" value={inputUsuario} onChange={(e) => setInputUsuario(e.target.value)} />
    <button onClick={carregarPerfil}>Carregar Perfil</button>


      {nomeUsuario.length > 4 && (
        <> 
        <Perfil nomeUsuario={nomeUsuario} />
        <Reposlist nomeUsuario={nomeUsuario} />

        </>
      )}

    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toogle form</button> */}
    </>
  )
}

export default App
