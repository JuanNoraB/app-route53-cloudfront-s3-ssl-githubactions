girimport './App.css';
import PostLayout1 from './PostLayout1.module.css';


function App() {
  return (
    <div className={PostLayout1.container}>
      <iframe
        src={`${process.env.PUBLIC_URL}/post-layout-1.html`}
        title="Post Layout 1"
        className={PostLayout1.iframe}
        seamless
      ></iframe>
    </div>
  );
}


export default App;
