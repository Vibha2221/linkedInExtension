export {}
const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-100 h-screen p-4">
        <div className="mb-6">
          <img src="/profile.jpg" alt="Profile" className="rounded-full h-20 w-20" />
          <h2 className="mt-4 text-lg font-semibold">Your Name</h2>
          <p className="text-gray-500">Software Developer</p>
        </div>
        <div>
          <h3 className="text-gray-700 font-semibold">Connections</h3>
          <ul>
            <li className="mt-2">John Doe</li>
            <li>Jane Smith</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  