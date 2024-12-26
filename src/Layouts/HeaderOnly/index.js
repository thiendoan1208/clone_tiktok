import Header from "../components/Header";

function HeaderOnly({ children }) {
  const currentUser = true;

  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
