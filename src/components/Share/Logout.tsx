const Logout = () => {
  const onClick = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/";
  };
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={onClick}
    >
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
