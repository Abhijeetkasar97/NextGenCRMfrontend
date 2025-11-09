import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChartCard from '../components/ChartCard';
import LeadsByStatusChart from '../charts/LeadsByStatusChart';
import PerformanceChart from '../charts/PerformanceChart';
import ConversionChart from '../charts/ConversionChart';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        {/* Dashboard Header */}
        <header className="dashboard-header">
          <h2>Dashboard Overview</h2>
          <p>Welcome back! Here's what's happening with your sales and leads today.</p>
        </header>

        {/* Key Metrics Cards */}
        <section className="metrics-cards">
          <div className="metric-card">
            <h3>Total Leads</h3>
            <p>1,245</p>
          </div>
          <div className="metric-card">
            <h3>Open Deals</h3>
            <p>312</p>
          </div>
          <div className="metric-card">
            <h3>Conversion Rate</h3>
            <p>27%</p>
          </div>
          <div className="metric-card">
            <h3>Revenue</h3>
            <p>$42,300</p>
          </div>
        </section>

        {/* Charts */}
        <section className="charts-grid">
          <ChartCard title="Leads by Status">
            <LeadsByStatusChart />
          </ChartCard>
          <ChartCard title="Performance">
            <PerformanceChart />
          </ChartCard>
          <ChartCard title="Conversion">
            <ConversionChart />
          </ChartCard>
        </section>

        {/* Recent Leads Table */}
        <section className="recent-leads">
          <h3>Recent Leads</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>New</td>
                <td>Jane Smith</td>
                <td>2025-11-09</td>
              </tr>
              <tr>
                <td>Mary Johnson</td>
                <td>mary@example.com</td>
                <td>Contacted</td>
                <td>John Doe</td>
                <td>2025-11-08</td>
              </tr>
              <tr>
                <td>Peter Parker</td>
                <td>peter@example.com</td>
                <td>Qualified</td>
                <td>Emily Clark</td>
                <td>2025-11-07</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Activity Feed */}
        <section className="activity-feed">
          <h3>Recent Activity</h3>
          <ul>
            <li>John Doe updated deal stage to "Contacted"</li>
            <li>Mary Johnson was assigned to John Doe</li>
            <li>Emily Clark added a new note for Peter Parker</li>
            <li>New lead "Tony Stark" was added by Jane Smith</li>
          </ul>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button>Add New Lead</button>
            <button>Create Deal</button>
            <button>Send Email</button>
            <button>Generate Report</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
