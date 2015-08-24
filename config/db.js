var credentials = {
    user: 'admin',
    pwd: '123456',
    url: (process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME) ||
    'mongodb://admin:123456@localhost:27017/instroo'
}

module.exports = credentials;
