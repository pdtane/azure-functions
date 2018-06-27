module.exports = function (context, req) {
    if (req.body && req.body.key) {
        let key = req.body.key;
        let values = JSON.parse(context.bindings.outputTable.ArrayOfValues);
        // sort the array
        let sortedArray = values.sort((a, b) => { return a - b });
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { key: key, ArrayOfValues: sortedArray }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};