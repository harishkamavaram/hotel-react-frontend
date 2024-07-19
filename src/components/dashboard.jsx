import { Link } from "react-router-dom";
import { Card, Col, Row, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";


function Dashboard() {

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Rooms Booked " bordered={false}>

          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
            {/* <i class="bi bi-person-plus"></i> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Rooms" bordered={false}>
          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div></Card>
        </Col>
        <Col span={8}>
          <Card title="Total Rooms" bordered={false}>
          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Available Deluxe Rooms " bordered={false}>

          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
            {/* <i class="bi bi-person-plus"></i> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Double Rooms" bordered={false}>
          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Single Rooms" bordered={false}>
          <div className="spinners"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
          </Card>
        </Col>
      </Row>
    </main>
  );
}

export default Dashboard;
