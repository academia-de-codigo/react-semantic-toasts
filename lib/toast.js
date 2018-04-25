import Store from './store';

const store = new Store();
let id = 0;

function toast(item) {
    id += 1;
    store.add(Object.assign({ id }, item));
}

export { toast, store };
