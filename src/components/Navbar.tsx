
export {}
const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">LinkedIn Clone</div>
      <div className="space-x-6 flex items-center">
        <button>Home</button>
        <button>Notifications</button>
        <button>Messages</button>
        <button>Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
