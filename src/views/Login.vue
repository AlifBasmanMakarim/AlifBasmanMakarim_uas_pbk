<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <h2>Login Admin</h2>
      </div>
      <div class="form-login">
        <div class="form-group">
          <span class="input-icon">👤</span>
          <input v-model="username" placeholder="Username" />
        </div>
        <div class="form-group">
          <span class="input-icon">🔒</span>
          <input v-model="password" type="password" placeholder="Password" />
        </div>
        <button @click="login">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  setup() {
    const auth = useAuthStore()
    return { auth }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin123') {
        this.auth.login(this.username)
        this.$router.push('/admin')
      } else {
        this.error = 'Username atau password salah.'
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #efebe9, #d7ccc8);
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  background: #fffaf4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(141, 110, 99, 0.2);
}

.login-header {
  background: #6d4c41;
  color: white;
  padding: 25px;
  text-align: center;
}

.login-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
}

.form-login {
  padding: 30px;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #8d6e63;
  font-size: 1.2rem;
}

input {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border: 2px solid #d7ccc8;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fffaf4;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #8d6e63;
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(141, 110, 99, 0.15);
}

button {
  width: 100%;
  background: #8d6e63;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #5d4037;
}

button::before {
  content: "→ ";
  font-size: 1.2rem;
}

.error {
  color: #c62828;
  background: #ffebee;
  padding: 12px;
  border-radius: 6px;
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
}

@media (max-width: 480px) {
  .form-login {
    padding: 25px 20px;
  }

  input {
    padding: 10px 14px 10px 38px;
  }
}
</style>
