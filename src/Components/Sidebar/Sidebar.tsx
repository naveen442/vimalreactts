import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);

      }}
      items={[
        { label: "Dashboard", key: "/Dashboard/Dashboardpage" },
        { label: "Proposals", key: "/Dashboard/Proposalspage" },
      ]}>
    </Menu>
  )
}

export default Sidebar