# React Semantic Toasts

Simple and easy Semantic UI animated toast notifications for React

![Toasts](/img/toasts.png?raw=true 'Toasts')

## Installation

```bash
$ npm install --save react-semantic-toasts semantic-ui-react semantic-ui-css
```

## Usage

Import the library into your project using ES6 module syntax

```javascript
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
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
            description: 'This is a Semantic UI toast'
        },
        () => console.log('toast clicked'),
        () => console.log('toast closed')
    );
}, 2000);

setTimeout(() => {
    toast({
        type: 'warning',
        icon: 'envelope',
        title: 'Warning Toast',
        description: 'This is a Semantic UI toast wich waits 5 seconds before closing',
        time: 5000,
        onClick: () => alert('you click on the toast'),
        onClose: () => alert('you close this toast')
    });
}, 5000);
```

## API

### Toast Container

The `<SemanticToastContainer>` receives an optional `position` prop, which can be one of `top-right`, `top-center`, `top-left`, `bottom-right`, `bottom-center` or `bottom-left`.

The type of animation can be specifed using an optional `animation` prop. If not present, will be derived from the container position.

```jsx
<SemanticToastContainer position="top-right" />
```

### Toast

The `toast` notification function receives a toast options, a click callback as function arguments and a close callback function as arguments:

```javascript
toast(options, onClick, onClose);
```

#### Toast Options

*   `title` - The header of the toast
*   `description` - The content of the toast
*   `type` - Can be one of `info`, `success`, `warning`, or `error`
*   `icon` - Override the default icon
*   `time` - Duration to keep the toast open, 0 to wait until closed by the user
*   `onClick` - The function that will be called when you click on the toast
*   `onClose` - The function that will be called when you click `X` on the toast

## License

Licensed under MIT
