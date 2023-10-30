import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    console.log(campaigns)

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />
  }

  render() {
    return <div>
                <Layout>
                  <h3>Open Campaigns</h3>
                  <Button floated="right" content="Create Campaign" icon="add circle" primary />
                  {this.renderCampaigns()}
                </Layout>
            </div>;
  }
}

export default CampaignIndex;
