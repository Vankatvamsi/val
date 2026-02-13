export default function StoryPage({ title, message, next, onNext }) {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <p>{message}</p>

      {next && (
        <button onClick={onNext} style={styles.button}>
          Next ❤️
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(pink, lavender)",
    textAlign: "center",
    padding: "20px"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer"
  }
};
