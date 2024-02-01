export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      Hello World
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        {/* You can put additional content here */}
        <button className="btn btn-primary">One</button>
        <button className="btn btn-secondary">Two</button>
        <button className="btn btn-accent btn-outline">Three</button>
      </div>
    </div>
  );
}
