import { Form, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;

export default function Login() {
  const onFinish = (values: unknown) => {
    console.log("Login success:", values);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 30,
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Login account
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Your email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="name@company.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="******" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login an account
          </Button>
        </Form.Item>
      </Form>

      <Text style={{ display: "block", textAlign: "center" }}>
        Already have an account? <a href="#">Register here</a>
      </Text>
    </div>
  );
}
