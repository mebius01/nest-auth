const PINO_MODE_CONFIG: {
  messageFormat: string;
  ignore: string;
  colorize: boolean;
  singleLine: boolean;
} =
  process.env.NODE_ENV == 'prod'
    ? {
        messageFormat: '{req.method} {req.url} {res.statusCode} {msg}',
        ignore: 'req.headers,res.headers',
        colorize: false,
        singleLine: false,
      }
    : {
        messageFormat: '{req.method} {req.url} {res.statusCode} {msg}',
        ignore: 'req,res',
        colorize: true,
        singleLine: true,
      };

export default () => ({
  prefix: process.env.PREFIX,
  port: process.env.PORT,
  pino: {
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: PINO_MODE_CONFIG,
      },
    },
  },
});
