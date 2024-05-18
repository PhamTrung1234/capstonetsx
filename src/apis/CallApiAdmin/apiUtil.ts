import axios from "axios";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
});

api.interceptors.request.use((config: any) => {
  const userLocal = localStorage.getItem("user");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentUSer = userLocal ? JSON.parse(userLocal) : null;
  config.headers = {
    ...config.headers,
    // Authorization: currentUSer ? `Bearer ${currentUSer.accessToken}` : "",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4xMTIzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibG9xYXZAbWFpbGluYXRvci5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImxvcWF2QG1haWxpbmF0b3IuY29tIiwiR1AwMSJdLCJuYmYiOjE3MTYwMTE5NTEsImV4cCI6MTcxNjAxNTU1MX0.yjKl15ptp8M4g4QOoHVNJ0vo3KoRQg3BfE1bl0u9GXw`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM",
  };
  return config;
});

export default api;
