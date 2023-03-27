import { useState } from "react";

const DEFAULT_USER = { email: "", password: "" };

const Bai2 = () => {
  const [user, setUser] = useState(DEFAULT_USER);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (user.email && user.password) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Đăng nhập thất bại!");
    }
    setUser(DEFAULT_USER);
  };

  return (
    <div>
      <input
        name="email"
        value={user.email}
        placeholder="email"
        onChange={onChange}
      />
      <input
        name="password"
        value={user.password}
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <button onClick={onSubmit}>Log in</button>
    </div>
  );
};

export default Bai2;
