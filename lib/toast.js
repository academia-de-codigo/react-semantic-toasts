import Store from './store';

const store = new Store();

function toast(item) {
    store.add(item);
}

export { toast, store };
