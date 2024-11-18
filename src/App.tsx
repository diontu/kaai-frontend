// components
// import Dashboard from "./interface/Dashboard";
import NavBar from "./interface/NavBar";

// styles
import styles from "./App.module.css";

const links = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Settings",
    path: "/settings",
  },
];

function App() {
  return (
    <div className={styles.app}>
      <NavBar links={links} />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
