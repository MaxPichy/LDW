import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';

function Dashboard() {
  return (
    <h1 className="text-x1 font-bold text-slate-800">Dashboard do Sistema</h1>
  );
}

function Perfil() {
  return (
    <h1 className="text-x1 font-bold text-slate-800">Perfil do Usuário</h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
        </Route>

        {/* Redirecionamento de segurança para qualquer rota desconhecida */}
        <Route path="*" element={<Navigate to="/dashboard" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
