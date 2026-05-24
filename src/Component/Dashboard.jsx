import Header from "./Header";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";


const Dashboard = () => {
      return (
            <div>
                 <Sidebar />
                <Header />

      <div>
        <StatCard title="Users" value="1200" />
        <StatCard title="Sales" value="$5000" />
      </div>
           </div>
      );
};

export default Dashboard;