import {AppError} from "../utils/AppError.js";

export const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    //fallback for unhandled errors
    console.error(err);
    res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });     
};