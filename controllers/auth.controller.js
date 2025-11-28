const users = [
  { username: 'alaa', password: '1234' },
  { username: 'user', password: 'abcd' }
];

const login = (req, res) => {
  // هذا السطر لازم يكون أول حاجة داخل الفنكسيون!
  const { username, password } = req.body;

  const foundUser = users.find(
    u => u.username === username && u.password === password
  );

  if (foundUser) {
    res.json({ message: "Authentification reussite !" });
  } else {
    res.status(401).json({ message: "Nom d'utilisateur ou mot de passe est incorrect" });
  }
};

module.exports = { login };
"ani bdlt chou"