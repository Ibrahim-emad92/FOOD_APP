const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const token = authHeader.split(' ')[1];

        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Unauthorized user"
                });
            }
            req.user= {id:decoded.id}; 
            next();
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server error",
            error
        });
        console.log(error);
    }
}
