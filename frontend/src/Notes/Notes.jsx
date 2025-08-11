import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Note Submitted:", note);

    setNote({ title: "", content: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Create a Note</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Content"
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default Notes;
