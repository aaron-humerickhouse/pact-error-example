import React from 'react'
import { Input, Form, InputNumber, Checkbox, Button } from 'antd'

class LocationFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Test Name',
      laneCount: 0,
      hasRestaurant: true,
      hasBar: false,
      streetAddress: '',
      secondaryAddress: '',
      city: '',
      state: '',
      zipCode: ''
    };
  }

  layout = {
    labelCol: { offset: 0, span: 3 },
    wrapperCol: { span: 9 },

  };

  nonLabelLayout = {
    wrapperCol: { offset: 3, span: 12 },
  };


  handleInputChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  render() {
    const { name, laneCount, hasRestaurant, hasBar, streetAddress, secondaryAddress, city, state, zipCode } = this.state;

    return (
      <Form
        {...this.layout}
        name="location"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        scrollToFirstError={true}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the location's name." }]}
        >
          <Input
            value={name}
            onChange={this.handleInputChange.bind(this, 'name')}
          />
        </Form.Item>

        <Form.Item
          label="Lane Count"
          name="laneCount"
        >
          <InputNumber
            defaultValue={laneCount}
            onChange={this.handleInputChange.bind(this, 'laneCount')} min={0}
          />
        </Form.Item>

        <Form.Item {...this.nonLabelLayout} name="hasRestaurant" valuePropName="unchecked">
          <Checkbox
            defaultChecked={hasRestaurant}
            onChange={this.handleInputChange.bind(this, 'hasRestaurant')}
          >
            Has a restaurant?
          </Checkbox>
        </Form.Item>

        <Form.Item {...this.nonLabelLayout} name="hasBar" valuePropName="unchecked">
          <Checkbox
            defaultChecked={hasBar}
            onChange={this.handleInputChange.bind(this, 'hasBar')}
          >
            Has a bar?
          </Checkbox>
        </Form.Item>

        <h3>Address</h3>

        <Form.Item
          label="Street Address"
          name="streetAddress"
          rules={[{ required: true, message: "Please input the location's street address." }]}
        >
          <Input
            defaultValue={streetAddress}
            onChange={this.handleInputChange.bind(this, 'streetAddress')}
          />
        </Form.Item>

        <Form.Item
          label="Secondary Address"
          name="secondaryAddress"
        >
          <Input
            defaultValue={secondaryAddress}
            onChange={this.handleInputChange.bind(this, 'secondaryAddress')}
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input the location's city." }]}
        >
          <Input
            defaultValue={city}
            onChange={this.handleInputChange.bind(this, 'city')}
          />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please input the location's state." }]}
        >
          <Input
            defaultValue={state}
            onChange={this.handleInputChange.bind(this, 'state')}
          />
        </Form.Item>

        <Form.Item
          label="Zip Code"
          name="zipCode"
          rules={[{ required: true, message: "Please input the location's zip code." }]}
        >
          <Input
            defaultValue={zipCode}
            onChange={this.handleInputChange.bind(this, 'zipCode')}
          />
        </Form.Item>

        <Form.Item {...this.nonLabelLayout} >
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default LocationFormComponent;