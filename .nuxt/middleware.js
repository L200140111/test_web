const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['unauth'] = require('../middleware/unauth.js')
middleware['unauth'] = middleware['unauth'].default || middleware['unauth']

export default middleware
