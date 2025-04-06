const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};