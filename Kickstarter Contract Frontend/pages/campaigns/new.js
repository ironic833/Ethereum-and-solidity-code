import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Layout from "../../components/layout";

class CampaignNew extends Component {
    render() {
        return (
                <Layout>
                  <h3>Create Campaign!</h3>

                  <Form>
                    <Form.Field>
                        <label>Minium Contribution</label>
                        <input />
                        <Button primary>Create</Button>
                    </Form.Field>
                  </Form>
                </Layout>
            );
    }
}

export default CampaignNew;
