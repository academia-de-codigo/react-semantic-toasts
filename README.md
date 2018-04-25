# React Semantic Toasts

Simple and easy Semantic UI toast notifications for React

![Toasts](/img/toasts.png?raw=true 'Toasts')

## Installation

```bash
$ npm install --save react-semantic-toasts
```

## Usage

Import the library into your project using ES6 module syntax

```javascript
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
```

Render the `SemanticToastContainer` component as high up the DOM as possible:

```jsx
render() {
    return <SemanticToastContainer />;
}
```

Fire as many notifications as you want

```javascript
setTimeout(() => {
    toast({
        title: 'Semantic UI Info Toast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        onClose: () => console.log('toast closed')
    });
}, 2000);

setTimeout(() => {
    toast({
        type: 'warning',
        icon: 'envelope',
        title: 'Semantic UI Warning Toast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    });
}, 5000);
```

## License

Licensed under MIT
