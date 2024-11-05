import Container from "../components/Container";
import avatar from "../public/avatar.png";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("./bg.jpg")', backgroundSize: "cover" }}
    >
      <Container />
    </div>
  );
};

export default App;
