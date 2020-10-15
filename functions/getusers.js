const axious = require('axios')

exports.handler = (event, context, callback) => {

    const send = body => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body),
        })
    }

    axious.get('https://api.github.com/users')
        .then(json => json.data)
        .then(data => send(data))
        .catch(err => send(err))
}
