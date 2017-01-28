import React, { Component } from 'react';

import Header from 'Components/Header';
import MarkdownInput from 'Components/MarkdownInput';
import MarkdownPreview from 'Components/MarkdownPreview';

import './app.scss';
import './app.css';

export default function App() {
  return (
    <div>
      <Header />
      <MarkdownInput />
      <MarkdownPreview />
    </div>
  );
}

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <MarkdownInput />
//         <MarkdownPreview />
//       </div>
//     );
//   }
// }
