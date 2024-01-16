import './App.css';

const monospace = {
  fontFamily: "courier, serif"
}

function App() {
  return (
    <>
      <h1>Hiding API keys in Environment Variables</h1>
      <section>
        <h2>Setting up environment variables locally</h2>
        <p>(Using <a href="https://vitejs.dev/guide/env-and-mode" target="_blank">this</a> as a reference.)</p>
        <ol>
          <li>Update your <span style={monospace}>.gitignore</span> to include <span style={monospace}>.env</span> on its own line.</li>
          <li>Create a file at the root of your project called <span style={monospace}>.env</span></li>
          <li>Add key-value pairs in the <span style={monospace}>.env</span> file. In order for your Vite app to use them, the keys <em>must</em> begin with <span style={monospace}>VITE_</span>, for example
          <pre style={monospace}>
            VITE_API_KEY=4jk6g5kj4145khg1lhvv
            <br />
            VITE_PASSWORD=pumpkin+horse+watch+frond
          </pre>
          </li>
          <li>These environment variables are available throughout your Vite React app in the <span style={monospace}>import.meta.env</span> object. To use the above VITE_API_KEY in your JavaScript, use <span style={monospace}>import.meta.env.VITE_API_KEY</span></li>
          <li>NOTE: if the key does not begin with <span style={monospace}>VITE_</span>, the app will ignore it.</li>
        </ol>
        <p>
          The value of VITE_API_KEY is {import.meta.env.VITE_API_KEY}
        </p>
        <p>
          The value of SUPER_SECRET is {import.meta.env.SUPER_SECRET}
        </p>
      </section>
      <section>
        <h2>Using environment variables on Netlify</h2>
        <p>You can set environment variables on a per-app basis on Netlify. Remember, your <span style={monospace}>.env</span> file should <em>not</em> be in git (because it is ignored), and therefore will not be available to Netlify.</p>
        <p>When deploying your project, <em>before</em> you click the <b>Deploy</b> button, you can set up environment variables.</p>
        <ol>
        <li>Click the <b>Add environment variables</b>button.</li>
        <li>A button labeled <b>New variable</b> will appear. Click it.</li>
        <li>In the Key field, add the key for your variable. In the above example, the key was <span style={monospace}>VITE_API_KEY</span></li>
        <li>In the Value field, add the value for the variable. In the above example, the value was <span style={monospace}>4jk6g5kj4145khg1lhvv</span></li>
        <li>When you are done adding environment variables, click the <b>Deploy</b> button. (The text of the button will include your app name.)</li>
        </ol>
        <p>You can also edit Environment Variables on Netlify by selecting your Site, choosing <i>Site configuration</i>, and then in the <b>General</b> menu, choosing <i>Environment variables</i>.</p>
      </section>

    </>
  )
}

export default App
