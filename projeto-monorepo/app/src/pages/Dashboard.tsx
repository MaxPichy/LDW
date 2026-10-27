<<<<<<< HEAD
import { useAuth } from '../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
=======
// src/pages/Dashboard.tsx
import { useAuth } from '../hooks/useAuth';
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319

export function Dashboard() {
  const { user } = useAuth();

  return (
<<<<<<< HEAD
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Painel Principal</h1>
        <p className="text-sm text-slate-500">
          Visão geral dos recursos e dados da sessão ativa.
        </p>
      </div>

      <Card className="max-w-xl shadow-sm">
        <CardHeader>
          <CardTitle>Dados do Usuário</CardTitle>
          <CardDescription>
            Informações obtidas a partir do perfil do usuário autenticado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <strong>Identificador (ID):</strong> #{user?.id}
          </p>
          <p>
            <strong>Nome:</strong> {user?.nome}
          </p>
          <p>
            <strong>E-mail:</strong> {user?.email}
          </p>
          <p>
            <strong>Perfil:</strong>{' '}
            <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800">
              {user?.perfil || 'usuario'}
            </span>
          </p>
        </CardContent>
      </Card>
=======
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Painel Principal</h1>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <p className="text-slate-700">
          Sessão ativa com o usuário: <strong>{user?.nome}</strong> (
          {user?.email})
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Nível de acesso:{' '}
          <span className="font-semibold uppercase">
            {user?.perfil || 'usuario'}
          </span>
        </p>
      </div>
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
    </div>
  );
}
