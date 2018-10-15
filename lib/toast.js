import Store from './store';

const store = new Store();
let id = 0;

function toast(item, onClick, onClose) {
    id += 1;
    store.add(Object.assign({ id, onClick, onClose }, item));
}

export { toast, store };
