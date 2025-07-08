<template>
  <div class="login-page">
    <h2>Login Admin</h2>
    <div class="form-login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'

export default {
  data() {
    return { username: '', password: '', error: '' }
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
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.login-header {
  background: #2e7d32;
  color: white;
  padding: 25px;
  text-align: center;
  position: relative;
}

.login-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
}

.login-header::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #8d6e63;
}

.form-login {
  padding: 30px;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-login input {
  width: 100%;
  padding: 14px 16px 14px 45px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.form-login input:focus {
  border-color: #2e7d32;
  outline: none;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
  background-color: white;
}

.form-login input::placeholder {
  color: #95a5a6;
}

.form-group::before {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #95a5a6;
}

.form-group:nth-child(1)::before {
  content: "👤";
}

.form-group:nth-child(2)::before {
  content: "🔒";
}

button {
  width: 100%;
  background: #2e7d32;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

button:hover {
  background: #1b5e20;
}

button::before {
  content: "→";
  font-size: 1.2rem;
}

.error {
  color: #e74c3c;
  background: #ffebee;
  padding: 12px;
  border-radius: 6px;
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .login-container {
    border-radius: 12px;
  }
  
  .login-header {
    padding: 20px;
  }
  
  .form-login {
    padding: 25px 20px;
  }
  
  .form-login input {
    padding: 12px 14px 12px 40px;
  }
}
</style>