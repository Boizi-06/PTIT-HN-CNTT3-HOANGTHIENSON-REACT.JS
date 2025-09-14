import { Outlet, NavLink } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-48 bg-gradient-to-b from-indigo-500 to-blue-500 text-white p-4">
        <h1 className="text-lg font-bold mb-4">My Blog</h1>
        <nav>
          <NavLink
            to="/blog/posts"
            className={({ isActive }) =>
              isActive
                ? "block p-2 rounded bg-indigo-700"
                : "block p-2 rounded hover:bg-indigo-600"
            }
          >
            Posts
          </NavLink>
        </nav>
        <footer className="absolute bottom-4 text-sm">© 2025 My Blog</footer>
      </aside>

      {/* Nội dung chính */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
