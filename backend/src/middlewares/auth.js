export const protect = (req, res, next) => {
  return res.status(501).json({ message: 'protect middleware not implemented' });
};

export const adminOnly = (req, res, next) => {
  return res.status(501).json({ message: 'adminOnly middleware not implemented' });
};
