export default function NotFound() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      textAlign: "center" 
    }}>
      <h1 style={{ fontSize: "100px", fontWeight: "bold", margin: 0 }}>404</h1>
      <p style={{ fontSize: "24px", marginTop: "10px" }}>Not Found</p>
    </div>
  );
}
