import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/register-input";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/login");
    }
  }

  return (
    <section className="register-pagee">
      <h4>Isi form untuk mendaftar akun</h4>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/login">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
