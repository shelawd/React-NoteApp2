import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import AddNote from "./add-note";
import RegisterPage from "../pages/register-page";
import LoginPage from "../pages/login-page";
import { getUserLogged, putAccessToken } from "../utils/api";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => ({
      authedUser: data,
    }));
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => ({
      authedUser: data,
      initializing: false,
    }));
  }

  onLogout() {
    this.setState(() => ({
      authedUser: null,
    }));
    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    return (
      <div>
        <div className="header-app">
          <h1>NotePalette</h1>
          {/* <Navigation
            logout={this.onLogout}
            name={this.state.authedUser?.name}
          /> */}
        </div>
        <main>
          <Routes>
            {/* Pastikan properti loginSuccess diinisialisasi dengan benar */}
            <Route path="/login" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/add" element={<AddNote />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default NoteApp;