import { WinstonModule, WinstonModuleOptions } from 'nest-winston';
import winston, { transports, format, level } from 'winston';
import 'winston-daily-rotate-file';
const { colorize, combine, timestamp, printf, splat, errors } = format;

//日志默认配置
const defaultLoggerOptions = {
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), //该选项用于在日志中添加时间戳
    splat(), //该选项允许你在日志消息中使用占位符，
    errors({ stack: true }), //stack 设置为 true，则会将错误的堆栈信息包含在日志中
    printf(({ timestamp, level, message, stack }) => {
      return `${timestamp},${global.isBackgroundServer ? ` [BG]:` : ''}${
        process.env.NODE_ENV === 'development' ? ` ${level}:` : ''
      } ${typeof message === 'object' ? JSON.stringify(message) : message}${stack ? `, Stack: ${stack}` : ''}`;
    }), //stack 设置为 true，则会将错误的堆栈信息包含在日志中
  ),
};

export function winstonCreate(): WinstonModuleOptions {
  return {
    //所有类型
    transports: [
      //控制台输出管道
      consoleTransports,
      infoTransport,
      // errorTransport,
      // warningTransport,
      // helpTransport,
      // dataTransport,
      debugTransport,
      promptTransport,
      verboseTransport,
      inputTransport,
      sillyTransport,
    ],
  };
}
const now = new Date();
const currentMonth = ('0' + (now.getMonth() + 1)).slice(-2);
const currentDay = ('0' + now.getDate()).slice(-2);
const logDir = `logs/${now.getFullYear()}-${currentMonth}-${currentDay}`; // Directory path for logs

const infoTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'info',
  filename: logDir + '/Info-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});

const errorTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'error',
  filename: logDir + '/Error-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});

const helpTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Help-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});

const dataTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Data-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});

const warningTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Warning-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});

const debugTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Debug-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});
const promptTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Prompt-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});
const verboseTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Verbose-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});
const inputTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Input-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});
const sillyTransport = new transports.DailyRotateFile({
  ...defaultLoggerOptions,
  level: 'debug',
  filename: logDir + '/Silly-%DATE%.log',
  maxSize: '20m',
  maxFiles: '14d',
});


export const consoleTransports = new transports.Console({
  format: combine(colorize(), defaultLoggerOptions.format),
});

