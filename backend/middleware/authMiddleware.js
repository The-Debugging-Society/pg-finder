import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

exports.verifyToken = (req,res,next) => {
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            msg:"Forbidden request"
        })
    }
    const token=authHeader.split(" ")[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }catch(err){
        return res.status(403).json({
            msg:"Forbidden request"
        })
    }
};

// For role-based access (e.g., admin only)
exports.requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
