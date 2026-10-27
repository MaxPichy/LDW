<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
=======
// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState<string | null>(null);
<<<<<<< HEAD
  const [submetendo, setSubmetendo] = useState(false);
=======
  const [carregando, setCarregando] = useState(false);
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
  // Recupera a rota tentada anteriormente ou usa /dashboard como padrao
=======
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
  const rotaDestino =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    '/dashboard';

<<<<<<< HEAD
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
=======
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
    setErro(null);

    if (!email || !password) {
      setErro('Informe o e-mail e a senha.');
      return;
    }

    try {
<<<<<<< HEAD
      setSubmetendo(true);
=======
      setCarregando(true);
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
      await login({ email, password });
      navigate(rotaDestino, { replace: true });
    } catch (err) {
      setErro(
<<<<<<< HEAD
        err instanceof Error
          ? err.message
          : 'Credenciais inválidas ou falha ao autenticar.',
      );
    } finally {
      setSubmetendo(false);
=======
        err instanceof Error ? err.message : 'Falha ao autenticar usuário.',
      );
    } finally {
      setCarregando(false);
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
    }
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Entrar no Sistema
          </CardTitle>
          <CardDescription>
            Acesse o painel utilizando suas credenciais de acesso
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {erro && (
              <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
                {erro}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@fatec.sp.gov.br"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                disabled={submetendo}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                disabled={submetendo}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-2" disabled={submetendo}>
              {submetendo ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </CardContent>
      </Card>
=======
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Entrar no Sistema
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Acesse com suas credenciais de usuário
        </p>

        {erro && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@fatec.sp.gov.br"
              className="w-full h-10 px-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full h-10 px-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50"
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
>>>>>>> eead0b42c5b8e2e86d158b9f632663bf7a173319
    </div>
  );
}
