import Store from './store';

const store = new Store();
let id = 0;

function toast(item, onClose, onClick) {
    id += 1;
    store.add(Object.assign({ id, onClose, onClick }, item));
}

export { toast, store };
