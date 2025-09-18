import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Table } from "react-bootstrap";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean; // true = ngưng hoạt động
  content: string;
}

export default function ListPost() {
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<Omit<Post, "id">>({
    title: "",
    image: "",
    date: "",
    status: false,
    content: "",
  });

  const [keyword, setKeyword] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive"
  >("all");

  // ----- Modal chặn -----
  const [showConfirmBlock, setShowConfirmBlock] = useState(false);
  const [postToToggle, setPostToToggle] = useState<Post | null>(null);

  // ----- Modal xóa -----
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  const getAllPost = async () => {
    const result = await axios.get<Post[]>("http://localhost:8080/posts");
    setPosts(result.data);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const handleClose = () => {
    setShow(false);
    setEditId(null);
    setForm({ title: "", image: "", date: "", status: false, content: "" });
  };
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    if (editId === null) {
      const newPost = { ...form, date: new Date().toLocaleDateString() };
      await axios.post("http://localhost:8080/posts", newPost);
    } else {
      await axios.put(`http://localhost:8080/posts/${editId}`, {
        ...form,
        date: new Date().toLocaleDateString(),
      });
    }
    await getAllPost();
    handleClose();
  };

  const handleEdit = (post: Post) => {
    setEditId(post.id);
    setForm({
      title: post.title,
      image: post.image,
      date: post.date,
      status: post.status,
      content: post.content,
    });
    setShow(true);
  };

  // ========== CHẶN ==========
  const handleConfirmToggle = (post: Post) => {
    setPostToToggle(post);
    setShowConfirmBlock(true);
  };

  const handleToggleStatus = async () => {
    if (!postToToggle) return;
    const updated = { ...postToToggle, status: !postToToggle.status };
    await axios.put(`http://localhost:8080/posts/${postToToggle.id}`, updated);
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postToToggle.id ? { ...p, status: !p.status } : p
      )
    );
    setShowConfirmBlock(false);
    setPostToToggle(null);
  };

  // ========== XÓA ==========
  const handleConfirmDelete = (post: Post) => {
    setPostToDelete(post);
    setShowConfirmDelete(true);
  };

  const handleDelete = async () => {
    if (!postToDelete) return;
    await axios.delete(`http://localhost:8080/posts/${postToDelete.id}`);
    setPosts((prev) => prev.filter((p) => p.id !== postToDelete.id));
    setShowConfirmDelete(false);
    setPostToDelete(null);
  };

  // ----- Filter & search -----
  const filteredPosts = posts.filter((p) => {
    const matchKeyword = p.title.toLowerCase().includes(keyword.toLowerCase());
    const matchStatus =
      filterStatus === "all"
        ? true
        : filterStatus === "active"
        ? !p.status
        : p.status;
    return matchKeyword && matchStatus;
  });

  return (
    <div>
      <h1>Danh sách bài viết</h1>

      <div className="d-flex gap-3 mb-3">
        <Form.Control
          placeholder="Tìm kiếm theo tiêu đề"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ maxWidth: 250 }}
        />

        <Form.Select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as "all" | "active" | "inactive")
          }
          style={{ maxWidth: 200 }}
        >
          <option value="all">Tất cả</option>
          <option value="active">Đang hoạt động</option>
          <option value="inactive">Ngưng hoạt động</option>
        </Form.Select>

        <Button variant="primary" onClick={handleShow}>
          Thêm Bài Viết
        </Button>
      </div>

      {/* Modal thêm/sửa */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Sửa bài viết" : "Thêm bài viết"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Ngưng hoạt động?"
              checked={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.checked })}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editId ? "Cập nhật" : "Thêm"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal xác nhận chặn */}
      <Modal show={showConfirmBlock} onHide={() => setShowConfirmBlock(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="warning">
            Bạn có chắc chắn muốn{" "}
            {postToToggle?.status ? "bỏ chặn" : "ngưng xuất bản"} bài viết?
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmBlock(false)}
          >
            Hủy
          </Button>
          <Button variant="primary" onClick={handleToggleStatus}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal xác nhận xóa */}
      <Modal
        show={showConfirmDelete}
        onHide={() => setShowConfirmDelete(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            Bạn có chắc chắn muốn xóa bài viết "
            <strong>{postToDelete?.title}</strong>"?
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmDelete(false)}
          >
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Bảng dữ liệu */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình Ảnh</th>
            <th>Ngày Viết</th>
            <th>Trạng Thái</th>
            <th>Nội Dung</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>{p.image}</td>
              <td>{p.date}</td>
              <td>
                {p.status ? (
                  <Alert variant="danger">Ngưng hoạt động</Alert>
                ) : (
                  <Alert variant="primary">Đang hoạt động</Alert>
                )}
              </td>
              <td>{p.content}</td>
              <td>
                <Button
                  size="sm"
                  variant={p.status ? "success" : "warning"}
                  onClick={() => handleConfirmToggle(p)}
                >
                  {p.status ? "Bỏ chặn" : "Chặn"}
                </Button>{" "}
                <Button size="sm" variant="info" onClick={() => handleEdit(p)}>
                  Sửa
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleConfirmDelete(p)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
