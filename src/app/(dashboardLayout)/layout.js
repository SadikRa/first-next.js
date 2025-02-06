import Sidebar from "../components/Shared/Sidebar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashBoardLayout;
