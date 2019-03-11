export const {
    APP_PORT = 5000,
    NODE_ENV = 'development',
    DB_USER = 'admin',
    DB_PASSWORD = 'Password01',
    DB_NAME = 'chat_app_graphql',
    DB_HOST = 'ds121268.mlab.com',
    DB_PORT = '21268'
} = process.env


export const IN_PROD = NODE_ENV === 'production'
