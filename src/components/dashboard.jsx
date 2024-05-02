import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
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

            Card content
            {/* <i class="bi bi-person-plus"></i> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Rooms" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Rooms" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Available Deluxe Rooms " bordered={false}>

            Card content
            {/* <i class="bi bi-person-plus"></i> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Double Rooms" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Available Single Rooms" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </main>
  );
}

export default Dashboard;
