


"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"

export default function TermsAndCondition() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Terms & Condition",
      content:
        "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: "Privacy Policy",
      content:
        "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ])
  const router = useRouter()

  const handleDelete = (id: number) => {
    setSections(sections.filter((section) => section.id !== id))
  }


  // const handleAddSection = () => {
  //   const newSection = {
  //     id: Date.now(),
  //     title: "New Section",
  //     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   }
  //   setSections([...sections, newSection])
  // }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem" }}>
      <div >


        <button
          onClick={() => router.push("/terms-condition/add")}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            marginBottom: "2rem",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
        >
          Add Terms & Policy
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {sections.map((section) => (
            <div
              key={section.id}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: 0 }}>{section.title}</h2>
                <button
                  onClick={() => handleDelete(section.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
                >
                  Delete
                </button>
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#6b7280", margin: 0 }}>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
