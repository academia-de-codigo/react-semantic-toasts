import Store from './store';

const store = new Store();
let id = 0;

function toast(item, cb) {
    id += 1;
    store.add(Object.assign({ id, onClose: cb }, item));
}

export { toast, store };
