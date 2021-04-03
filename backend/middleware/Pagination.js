function paginationResults(model) {
    return async (req, res, next) => {
        const page = Number.parseInt(req.query.page);
        const limit = Number.parseInt(req.query.limit);
    
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};
        try {
            if (endIndex < (await model.countDocuments().exec())) {
            results.next = {
                page: page + 1,
                limit,
            };
            }
            if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit,
            };
            }
    
            results.current = {
                patient: await model.find().limit(limit).skip(startIndex).exec(),
                total: await model.collection.countDocuments(),
                page,
                limit,
                message: "FETCH DATA SUCCESS",
            };
            res.pagination = results;
            next();
        } catch (err) {
            res.status(500).json({
            message: err.message,
            });
        }
    };
}

module.exports = paginationResults;