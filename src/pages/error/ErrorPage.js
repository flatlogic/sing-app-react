import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

import s from './ErrorPage.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={s.errorPage}>
        <Container className="height-100">
          <main id="content" className={s.errorContainer} role="main">
            <Row>
              <Col
                xs={{ size: 10, offset: 1 }}
                md={{ size: 6, offset: 3 }}
                xl={{ size: 4, offset: 4 }}
              >
                <div className={s.errorContainer}>
                  <h1 className={s.errorCode}>404</h1>
                  <p className={s.errorInfo}>
                    Opps, it seems that this page does not exist.
                  </p>
                  <p className={[s.errorHelp, 'mb-3'].join(' ')}>
                    If you are sure it should, search for it.
                  </p>
                  <Form method="get">
                    <FormGroup>
                      <Input className="input-no-border" type="text" placeholder="Search Pages" />
                    </FormGroup>
                    <Button className={s.errorBtn} type="submit" color="inverse">
                      Search <i className="fa fa-search text-warning ml-xs" />
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </main>
          <footer className={s.pageFooter}>
            2017 &copy; Sing. Admin Dashboard Template.
          </footer>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(ErrorPage);
