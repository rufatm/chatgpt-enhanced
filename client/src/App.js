import "normalize.css"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <aside className="chatgpt-sidebar">
        <div className="new-chat-button">
          <span>+</span>
          NEW CHAT
        </div>
      </aside>
      <section className="chatgpt-main">
        <div className="chat-input-wrapper">
          <textarea
            className="chat-input-textarea"
            placeholder="Send a Message"
          ></textarea>
        </div>
      </section>
    </div>
  )
}

export default App
