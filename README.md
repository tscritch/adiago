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

## Development

See [Adiago Development](/components/development.md)

## Progress

- [x] Alert Dialog
- [x] Button
- [x] Checkbox
- [x] Dropdown
  - [ ] Dropdown item color options
- [x] Input
- [x] Label
- [x] Progress
- [x] Select
  - [ ] Scroll Buttons
- [ ] Sidebar
  - [x] List items
  - [x] List Item Action Menu
  - [x] Collapsible items
  - [ ] Re-arrangeable items
- [ ] Switch
- [x] Toast
- [ ] Toggle Group
- [x] Tooltip
