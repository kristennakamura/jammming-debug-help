import styles from './styles/Login.module.css';

const Login = ({login}) =>{
    return(
      <div className = {styles.loginTab}>
        <form className = {styles.form}>
          <button className = {styles.button} onClick={login}>Log in</button>
        </form>
      </div>
    )
}

export default Login;