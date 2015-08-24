var credentials = {
    user: 'admin',
    pwd: '123456',
    url: ('mongodb://' + 'admin:IIvaNfiZzz3T@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + OPENSHIFT_MONGODB_DB_PORT) ||
    'mongodb://admin:123456@localhost:27017/instroo'
}

module.exports = credentials;
