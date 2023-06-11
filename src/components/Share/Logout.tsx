const Logout = () => {
  const onClick = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/";
  };
  return (
    <div
      className="flex items-center justify-center px-4  w-[500px] h-[80px] border-4 border-solid border-yellow-500 rounded-xl bg-yellow-200 hover:bg-yellow-400"
      onClick={onClick}
    >
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
