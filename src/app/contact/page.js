import "./styles/contact.css";

export default function Contact() {
  const items = [
    { id: 1, title: "Item 1", description: "Description for item 1." },
    { id: 2, title: "Item 2", description: "Description for item 2." },
    { id: 3, title: "Item 3", description: "Description for item 3." },
    { id: 3, title: "Item 3", description: "Description for item 3." },
    { id: 3, title: "Item 3", description: "Description for item 3." },
    { id: 3, title: "Item 3", description: "Description for item 3." },
  ];
  return (
    <main>
      <div className="container">
        <div className="grid-container">
          {items.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const Item = ({ title, description }) => {
  return (
    <div className="item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
