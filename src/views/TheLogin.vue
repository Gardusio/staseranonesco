<template>
  <the-background> </the-background>
  <section class="main">
    <img class="logo" src="../assets/images/LOGO.png" />
    <form class="login-form" @submit="login">
      <input
        type="text"
        class="login-form__entry"
        placeholder="Username"
        required="true"
      />
      <input
        type="password"
        class="login-form__entry"
        placeholder="Password"
        required="true"
      />
      <div class="login-form__actions">
        <button class="login-form__actions__login">Accedi</button>
      </div>
    </form>
    <a href="/" class="login-form__actions__forgot-password"
      >Recupera Credenziali</a
    >
  </section>
</template>

<script>
import TheBackground from "../components/layouts/TheBackground";
export default {
  components: { TheBackground },
  methods: {
    login() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
.main {
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}

.logo {
  width: 30rem;
}

.login-form {
  margin-top: 4.4rem;
}

.form-label {
  font-family: inherit;
  color: rgba(98, 61, 34, 45%);
  font-size: 1.8rem;
}

.login-form__entry {
  font-family: inherit;
  font-size: 1.6rem;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  color: #623d22;
  display: block;
  margin-bottom: 4rem;
  width: 24rem;
  height: 3rem;
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #623d22;
  box-shadow: 0 2px rgba(119, 122, 123, 0.2);
}

.login-form__actions {
  margin-top: 4rem;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  height: auto;
  cursor: pointer;
}

.login-form__actions__login {
  font-family: inherit;
  font-size: 1.4rem;
  letter-spacing: 1px;
  outline: none;
  border: 2px solid #f8f4ef;
  color: white;
  background-color: #2d150b;
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 100%);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  margin-bottom: 1rem;
  width: 164px;
  height: 42px;
  cursor: pointer;
}

.login-form__actions__forgot-password {
  font-family: inherit;
  letter-spacing: 1px;
  font-size: 1.4rem;
  text-decoration: none;
  margin-top: 0;
  color: #623d22;
}

@media only screen and (orientation: portrait) {
  .main {
    justify-content: center;
    margin: 0;
  }
}
</style>