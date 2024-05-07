import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Products</li>
          </ul>
        </nav>
      </aside>
      <div className="">{children}</div>
    </div>
  );
};

export default AdminLayout;
