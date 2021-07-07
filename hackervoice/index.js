module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = req.query.password === "letmein" 
    ? "Access granted." : 
    "Access denied."
    context.log(responseMessage)
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
