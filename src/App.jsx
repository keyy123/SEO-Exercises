import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h2>Hello</h2>
      <p>You have changed...</p>
      <img src="/SEO.png" alt="Search Engine Optimization or SEO" />
    </div>
  );
};

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(<App />);
