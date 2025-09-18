import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        
        <strong className="me-auto">Cảnh Báo</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Lỗi kết nối máy chủ</Toast.Body>
    </Toast>
  );
}

export default BasicExample;