# React Semantic Toasts

Simple and easy Semantic UI animated toast notifications for React

![Toasts](/img/toasts.png?raw=true 'Toasts')

## Installation

```bash
$ npm install --save react-semantic-toasts semantic-ui-react semantic-ui-css
```

## Usage

The library does not depend on `semantic-ui-css` anymore, make sure to import `semantic.min.css` or at the very least, to include the following components:

```javascript
import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';
```

Import the library into your project using ES6 module syntax:

```javascript
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
```

Render the `SemanticToastContainer` component:

```jsx
render() {
    return <SemanticToastContainer />;
}
```

Fire as many notifications as you want

```javascript
setTimeout(() => {
    toast(
        {
            title: 'Info Toast',
            description: <p>This is a Semantic UI toast</p>
        },
        () => console.log('toast closed'),
        () => console.log('toast clicked')
    );
}, 1000);

setTimeout(() => {
    toast({
        type: 'warning',
        icon: 'envelope',
        title: 'Warning Toast',
        description: 'This is a Semantic UI toast wich waits 5 seconds before closing',
        animation: 'bounce',
        time: 5000,
        onClick: () => alert('you click on the toast'),
        onClose: () => alert('you close this toast')
    });
}, 5000);
```

## API

### Toast Container

The `<SemanticToastContainer>` receives an optional `position` prop, which can be one of `top-right`, `top-center`, `top-left`, `bottom-right`, `bottom-center` or `bottom-left`.

The type of animation can be specifed using an optional `animation` prop with any supported [SemanticUI animation](https://semantic-ui.com/modules/transition.html) value. If not present, will be derived from the container position.

```jsx
<SemanticToastContainer position="top-right" />
```

### Toast

The `toast` notification function receives a toast options object and optional close and click callbacks as function arguments:

```javascript
toast(options, onClose, onClick);
```

#### Toast Options

-   `title` - The header of the toast
-   `description` - The content of the toast
-   `type` - Can be one of `info`, `success`, `warning`, or `error`
-   `icon` - Override the default icon
-   `color` - Override color with [semantic values](https://react.semantic-ui.com/collections/message/#variations-color)
-   `size` - Size of toast with [semantic values](https://react.semantic-ui.com/collections/message/#variations-size)
-   `time` - Duration to keep the toast open, 0 to wait until closed by the user
-   `onClose` - The function that will be called when you click the toast is closed
-   `onClick` - The function that will be called when you click on the toast
-   `animation` - Override the default toast container animation

## License

Licensed under MIT
