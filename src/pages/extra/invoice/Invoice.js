/* eslint class-methods-use-this: ["error", { "exceptMethods": ["printInvoice"] }] */
import React from 'react';
import {
  Row,
  Col,
  Table,
  ButtonToolbar,
  Button,
} from 'reactstrap';

import s from './Invoice.module.scss';
import Widget from '../../../components/Widget';
import iLogo from '../../../images/invoice-logo.png';

class Stats extends React.Component {

  printInvoice() {
    window.print();
  }

  render() {
    return (
      <Row>
        <Col lg={11}>
          <Row className={s.root}>
            <Col xs={12}>
              <Widget bodyClass={"p-0"}>
                <div className="widget">
                  <header>
                    <Row>
                      <Col md="6" xs="12" className="col-print-6">
                        <img src={iLogo} alt="Logo" className={s.invoiceLogo} />
                      </Col>
                      <Col md="6" xs="12" className="col-print-6">
                        <h4 className="text-right">
                          #<span className="fw-semi-bold">9.45613</span> /
                          <small>17 May 2014</small>
                        </h4>
                        <div className="text-muted fs-larger text-right">
                          Some Invoice number description or whatever
                        </div>
                      </Col>
                    </Row>
                  </header>
                  <section className={s.invoiceBody}>
                    <Row className="mb-lg">
                      <Col sm={6} className="col-print-6">
                        <h5 className="text-muted no-margin">Company Information</h5>
                        <h3 className="company-name m-t-1">
                          Wrapbootstrap LLC
                        </h3>
                        <address>
                          <strong>2 Infinite Loop</strong><br />
                          Minsk, Belarus 220004<br />
                          088.253.5345<br />
                          <abbr title="Work email">e-mail:</abbr> <a href="mailto:#">email@example.com</a><br />
                          <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br />
                          <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                        </address>
                      </Col>

                      <Col sm={6} className="col-print-6 text-right">
                        <h5 className="text-muted no-margin">Client Information</h5>
                        <h3 className="client-name m-t-1">
                          Veronica Niasvizhskaja
                        </h3>
                        <address>
                          <strong>Consultant</strong> at
                          {/* eslint-disable */}
                          <a href="#">Allspana</a><br />
                          {/* eslint-enable */}
                          <abbr title="Work email">e-mail:</abbr> <a href="mailto:#">maryna@allspana.by</a><br />
                          <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br />
                          <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                          <p className="no-margin"><strong>Note:</strong></p>
                          <p className="text-muted">Some nights I stay up cashing in my bad luck.
                            Some nights I call it a draw</p>
                        </address>
                      </Col>
                    </Row>

                    <Table className="table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th className="hidden-sm-down d-print-none">Description</th>
                          <th>Quantity</th>
                          <th className="hidden-sm-down d-print-none">Price per Unit</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Brand-new 27 monitor</td>
                          <td className="hidden-sm-down d-print-none">2,560x1,440-pixel (WQHD) resolution supported!</td>
                          <td>2</td>
                          <td className="hidden-sm-down d-print-none">700</td>
                          <td>1,400.00</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Domain: okendoken.com</td>
                          <td className="hidden-sm-down d-print-none">6-month registration</td>
                          <td>1</td>
                          <td className="hidden-sm-down d-print-none">10.99</td>
                          <td>21.88</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Atlas Shrugged</td>
                          <td className="hidden-sm-down d-print-none">Novel by Ayn Rand, first published in 1957 in the
                          United
                          States
                        </td>
                          <td>5</td>
                          <td className="hidden-sm-down d-print-none">35</td>
                          <td>175.00</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>New Song by Dr. Pre</td>
                          <td className="hidden-sm-down d-print-none">Lyrics: praesent blandit augue non sapien ornare
                          imperdiet
                        </td>
                          <td>1</td>
                          <td className="hidden-sm-down d-print-none">2</td>
                          <td>2.00</td>
                        </tr>
                      </tbody>
                    </Table>

                    <Row>
                      <Col xs={12} md={8} className="col-print-6">
                        <p>
                          <strong>Note:</strong>
                          Thank you for your business. Keep in mind, sometimes bad things happen. But it&#39;s just
                          sometimes.
                        </p>
                      </Col>
                      <Col md={4} xs={12} className="col-print-6">
                        <Row className="text-right justify-content-end">
                          <Col xs={6} />
                          <Col sm={3}>
                            <p>Subtotal</p>
                            <p>Tax(10%)</p>
                            <p className="no-margin"><strong>Total</strong></p>
                          </Col>
                          <Col sm={3}>
                            <p>1,598.88</p>
                            <p>159.89</p>
                            <p className="no-margin"><strong>1,758.77</strong></p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <p className="text-right mt-lg mb-xs">
                      Marketing Consultant
                    </p>
                    <p className="text-right">
                      <span className="fw-semi-bold">Bob Smith</span>
                    </p>
                    <ButtonToolbar className="mt-lg justify-content-end d-print-none">
                      <Button onClick={this.printInvoice} color="inverse" className="mr-2">
                        <i className="fa fa-print" />
                        &nbsp;&nbsp;
                        Print
                      </Button>
                      <Button color="success">
                        Proceed with Payment
                        &nbsp;
                        <span className="circle bg-white">
                          <i className="fa fa-arrow-right text-success" />
                        </span>
                      </Button>
                    </ButtonToolbar>
                  </section>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>);
  }

}

export default Stats;
