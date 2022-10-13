# Adiago

![Adiago Banner](/assets/Banner.jpg)

```
yarn add @adiago/components
```

```
npm i @adiago/components
```

```javascript
// Add AdiagoRoot component and css at the top level of your app
import { AdiagoRoot } from '@adiago/components';
import '@adiago/components/dist/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AdiagoRoot>
        <App />
      </AdiagoRoot>
  </React.StrictMode>
);
```

## Requirements

Adiago relies on `react`, `react-dom`, `classnames`, and `@heroicons/react` as peer dependencies.

```json
"peerDependencies": {
  "@heroicons/react": "^2.0.10",
  "classnames": "^2.0",
  "react": "^16.8 || ^17.0 || ^18.0",
  "react-dom": "^16.8 || ^17.0 || ^18.0"
}
```

## Development

See [Adiago Development](/components/development.md)

## Progress

- [x] Alert Dialog
- [ ] Audio Player
  > Basics are done but needs more time and thought for fully rounded solution
  - [x] Composed Simple Player
  - [ ] Composed Complex Player (all player controls, queue, volume)
  - [x] Player Provider
  - [ ] Play Button
  - [ ] Player state hook (isPlaying, currentAudio, playQueue, fns)
  - [ ] Player current audio hook
  - [ ] Player time progress hook
  - [ ] Player time progress text (option for total time)
  - [ ] Player Progress/Scrubber (option for scrub control - needs slider)
  - [ ] Player Volume Control (needs slider)
- [x] Audio Recorder
- [x] Button
- [x] Card
- [x] Checkbox
- [x] Dropdown
  - [x] Composed Dropdown (default config)
  - [ ] Dropdown item color options
- [x] Input
- [x] Label
- [x] Loader
- [x] Progress
- [x] Select
  - [ ] Scroll Buttons
- [ ] Sidebar
  - [x] List items
  - [x] List Item Action Menu
  - [x] Collapsible items
  - [x] Composed Sidebar (default config)
  - [ ] Re-arrangeable items
- [ ] Slider
- [x] Switch
- [x] Toast
- [x] Toggle Group
- [x] Tooltip
