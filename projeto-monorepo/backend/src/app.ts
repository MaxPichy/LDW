import express, {Request, Response} from 'express';
import cors from 'cors';
import { appRoutes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota de Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'Servidor Backend rodando com sucesso.',
    timestamp: new Date().toISOString(),
  });
});

// Registra todas as rotas da aplicação sob o prefixo /api
app.use('/api', appRoutes);

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export{app}