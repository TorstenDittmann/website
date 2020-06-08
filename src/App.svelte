<script>
  import Section from "./Section.svelte";
  import Project from "./Project.svelte";
</script>

<style>
  main {
    padding: 0;
    margin: 0 auto;
  }

  h1,
  h3 {
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  img.avatar {
    border-radius: 50%;
    max-width: 80vw;
  }

  @media (min-width: 960px) {
    h1,
    h3 {
      text-align: right;
      margin-right: 10vw;
    }

    img.avatar {
      max-width: 25vw;
	}
	
    ul {
      text-align: left;
    }
  }
</style>

<main>
  <Section>
    <div slot="title">
      <h1>Torsten Dittmann</h1>
      <h3>Frontend Developer</h3>
    </div>
    <img class="avatar" src="avatar.png" alt="Torsten Dittmann" />
  </Section>
  <Section>
    <h1 slot="title">About</h1>
    <span class="socials">
      <a href="https://github.com/torstendittmann">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838
            9.488c.5.087.687-.213.687-.476
            0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013
            1.35.725 1.538 1.025.9 1.512 2.338 1.087
            2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938
            0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262
            2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3
            2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025
            2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0
            1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0
            0 22 12c0-5.525-4.475-10-10-10z"
            fill="rgba(255,255,255,1)" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/torstendittmann">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389
            0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674
            1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003
            8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547
            1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3
            3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21
            20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
            fill="rgba(255,255,255,1)" />
        </svg>
      </a>
    </span>
    <p>
      In February 2021, I will successfully complete my retraining as an IT
      specialist at GFN AG in Cologne with a focus on application development at
      the IHK.
    </p>
    <p>
      A creative and pragmatic way of thinking distinguishes me beside my
      positively balanced nature.
    </p>
  </Section>
  <Section>
    <h1 slot="title">Skills</h1>
    <h2>Languages</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS/SASS</li>
      <li>Javascript</li>
      <li>Typescript</li>
    </ul>
    <h2>Frameworks</h2>
    <ul>
      <li>SvelteJS</li>
      <li>Angular</li>
    </ul>
    <h2>Technologies</h2>
    <ul>
      <li>Node.js</li>
      <li>Electron</li>
      <li>Cordova</li>
      <li>Git</li>
      <li>Webpack/Rollup</li>
    </ul>
  </Section>
  <Section>
    <h1 slot="title">Projects</h1>
    <Project
      title="OmniaWrite"
      github="https://github.com/torstendittmann/omniawrite"
      homepage="https://omniawrite.com">
      OmniaWrite is a cross-platform plain text editor engineered for creative
      writing.
    </Project>
    <Project
      title="omnia-ebook-generator"
      github="https://github.com/TorstenDittmann/omnia-ebook-generator">
      Node.js ebook generator using Embedded JavaScript templating.
    </Project>
    <Project
      title="omnia-editor"
      github="https://github.com/TorstenDittmann/omnia-ebook-generator"
      homepage="https://omnia-editor.now.sh">
      Browser based rich text editor with JSON output.
    </Project>
  </Section>
</main>
