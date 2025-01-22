<template>
  <div class="user-table">
    <h1>Lista de Usuários</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDate(user.create_time) }}</td>
        </tr>
        <tr v-if="users.length === 0">
          <td colspan="4">Nenhum usuário encontrado.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "@/utils/axios";

export default {
  name: "UserTable",
  data() {
    return {
      users: [], // Armazena os usuários
    };
  },
  methods: {
    // Função para formatar a data e ajustar o fuso horário
    formatDate(datetime) {
      if (!datetime) return "Data inválida";
      const date = new Date(datetime);

      // Subtraindo 3 horas para ajustar o fuso horário
      date.setHours(date.getHours() - 3);

      // Retorna a data formatada
      return date.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      });
    },
  },
  async created() {
    try {
      const response = await axios.get("/users"); // Requisição à rota /users
      this.users = response.data; // Preenche a lista de usuários com os dados da API
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  },
};
</script>

<style scoped>
.user-table {
  margin: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>