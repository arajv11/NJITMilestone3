import jwt from 'jsonwebtoken';

// Generate a JWT token associated with the user when they sign in
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      // Setting expiration time for JWT
      expiresIn: '4h',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    const token = authorizationHeader.slice(7, authorizationHeader.length);
    // Token comes in as Bearer token
    // Take only token after "Bearer "
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        res.status(401).send({ message: 'Token expired, please log back in' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Unauthorized, missing token' });
  }
};
