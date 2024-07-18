// Middleware isLoggedIn
function isLoggedIn(req, res, next) {
  if (req.session.loggedin) {
    return next();
  } else {
    res.redirect("/ip/auth/login");
    return;
  }
}

// Middleware untuk memeriksa apakah pengguna belum login
function isLoggedOut(req, res, next) {
  if (!req.session.loggedin) {
    return next();
  }
}

// Middleware untuk memeriksa role pengguna
function checkRole(role) {
  return (req, res, next) => {
    if (req.session.role === role) {
      return next();
    } else {
      res
        .status(403)
        .send("Forbidden: Anda tidak memiliki akses ke halaman ini");
    }
    return;
  };
}

module.exports = { isLoggedIn, isLoggedOut, checkRole };
