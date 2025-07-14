import { useEffect, useState } from "react"

import styles from './Reposlist.module.css'

const Reposlist = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState (false)

    useEffect(() => {
        setEstaCarregando(true)
        setDeuErro(false)
        
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => { 
            if (!res.ok) {
                    throw new Error('Usuário não encontrado')
            }
            return res.json()
        })
        .then(resJson => {
            setTimeout(() => {
                setRepos(resJson)
                setEstaCarregando(false)
            }, 3000)
        })
        .catch(e => {
            setDeuErro(true)
            setEstaCarregando(false)
        })
    }, [nomeUsuario])

    return (
    <div className="container">
        {estaCarregando && <h1>Carregando...</h1>}

        {!estaCarregando && deuErro && (
                <h2 style={{ color: 'red' }}>Erro ao carregar repositórios. Verifique o nome do usuário.</h2>
            )}
        
        {!estaCarregando && !deuErro && (

        <ul className={styles.list}>
            {/* {repos.map(repositorio => ( */}
            {repos.map(({id, name, language, html_url }) => (
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome: {name} </b>
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem: {language} </b>
                    </div>
                    <div className={styles.itemLink}>
                        <a target="_blank" href={html_url}>Visitar no Github</a>
                    </div>
                </li>
            ))}
        </ul>
        )}
    </div>    
    )
}

export default Reposlist