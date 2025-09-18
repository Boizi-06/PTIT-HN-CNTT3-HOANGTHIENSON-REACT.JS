import Dropdown from 'react-bootstrap/Dropdown';

function Bai4() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Boizi
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cài Đặt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Đổi Mật Khẩu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Đăng Xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Bai4;