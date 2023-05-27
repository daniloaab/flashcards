import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/user'

const Login = () => {

    const { user, mail, password, loading } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard")
    }, [user])

    if (loading) {
        return <p>carregando ...</p>
    }

    return (
        <>
            <div> 
            <h1 onClick={() =>("antonio@podgorski.com.br", "123123")}>Login</h1>
            </div>
            <Link to="/dashboard">Ir para o Dashboard</Link>

        </>
    )
}

export default Login