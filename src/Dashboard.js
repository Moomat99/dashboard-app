import React from 'react';
import { Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useTable } from 'react-table';

const Dashboard = () => {
  const data = React.useMemo(
    () => [
      { contactName: 'Clevey Thursfield', jobTitle: 'VP Quality Control', country: 'Brazil', status: 'Online', rating: 3, engagement: 'High' },
      { contactName: 'Briana Shemelt', jobTitle: 'Professor', country: 'USA', status: 'Offline', rating: 4, engagement: 'Medium' },
      { contactName: 'Orly Glasbey', jobTitle: 'Environmental Tech', country: 'Brazil', status: 'Online', rating: 5, engagement: 'High' },
      { contactName: 'Weidar McCombe', jobTitle: 'Civil Engineer', country: 'France', status: 'Online', rating: 2, engagement: 'Low' },
      { contactName: 'Mariellen Ravelus', jobTitle: 'Systems Administrator I', country: 'Germany', status: 'Online', rating: 4, engagement: 'Medium' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Contact Name', accessor: 'contactName' },
      { Header: 'Job Title', accessor: 'jobTitle' },
      { Header: 'Country', accessor: 'country' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Rating', accessor: 'rating' },
      { Header: 'Engagement', accessor: 'engagement' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Coffee Warehouse</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">My Team</Button>
          <Button variant="secondary">All Teams</Button>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Form.Control type="text" placeholder="Search in all columns..." />
        </Col>
        <Col>
          <Button variant="outline-primary">Export to Excel</Button>
          <Button variant="outline-secondary">Export to PDF</Button>
        </Col>
      </Row>
      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;