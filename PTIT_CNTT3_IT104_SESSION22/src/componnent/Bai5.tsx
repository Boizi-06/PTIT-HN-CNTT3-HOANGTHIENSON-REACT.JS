
import { Alert } from "react-bootstrap";

export default function Alerts() {
  return (
    <div style={{ width: 400 }}>
      <Alert variant="success" dismissible>
        Thêm tài khoản thành công.
        
      </Alert>
      <Alert variant="danger" dismissible>
        Thêm mới tài khoản thất bại.
        
      </Alert>
      <Alert variant="warning" dismissible>
        Tên không được để trống.
        
      </Alert>
    </div>
  );
}
