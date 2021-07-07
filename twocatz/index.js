const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let resp = await fetch(
        "https://cataas.com/cat", 
        {
            method: 'GET'
        }
    );
    
    let originaldata = await resp.arrayBuffer()
    let base64data = Buffer.from(originaldata).toString('base64')

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {base64data}
    };
    
}