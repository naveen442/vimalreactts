import { Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../../Components/Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <Row>
            <Col span={8} >
                <Sidebar />
            </Col>
            <Col span={16}>
                <Outlet />
            </Col>
        </Row>
    )
}

export default Dashboard