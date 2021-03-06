import React from 'react';
import btn from "../../images/btn.svg";
import passwordIcon from "../../images/password.svg";
import "./index.scss";
import Layout from "../Layout/layout";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserData} from "../../redux/actions/user";

const Login = ({setIsAuthOpenModal}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      const data = {email, password}
      await dispatch(setUserData(data, 'login'))
      navigate("/profile");
    } catch (e) {
      alert(e.response.data.error || 'Какая-то ошибка')
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <Layout>
      <div className="login">
        <div className="login__inner">
          <div className="login__head">
            <div className="login__head-title">Вход в аккаунт</div>
            <Link to="/"><img onClick={() => setIsAuthOpenModal(false)} src={btn} alt=""/></Link>
          </div>
          <form onSubmit={onSubmit}>
            <label className="form__email">
              <span>Email</span>
              <input value={email} onChange={handleChangeEmail} name="email" type="email" placeholder="Email..."/>
            </label>
            <label className="form__password">
              <span>Пороль</span>
              <input value={password} onChange={handleChangePassword} name="password" type="password"
                     placeholder="password..."/>
              <img src={passwordIcon} alt=""/>
            </label>
            <button type="submit">Войти</button>
          </form>
          <Link to="/registration">Зарегистрироваться</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;