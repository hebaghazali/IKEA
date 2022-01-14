import { storageApp } from './storage_initialize.js';
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
} from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js';

const storage = getStorage(storageApp);

export function downloadImages() {
  const listRef = ref(
    storage,
    'gs://ikea-8dc72.appspot.com/products/images/sale_images/'
  );

  let saleImagesDiv = document.getElementById('sale-images');
  listAll(listRef).then(res => {
    saleImagesDiv = Array.from(saleImagesDiv.children);
    let arr = [];

    saleImagesDiv.forEach(col => {
      arr.push(Array.from(col.children));
    });
    arr = arr.flat();

    const items = [...res.items];

    // Swapping
    [items[0], items[1], items[2], items[3], items[4]] = [
      items[1],
      items[4],
      items[3],
      items[2],
      items[0],
    ];

    for (const i in items) {
      const itemRef = items[i];

      getDownloadURL(
        ref(storage, `gs://ikea-8dc72.appspot.com/${itemRef._location.path}`)
      ).then(url => {
        arr[i].src = url;
      });
    }
  });
}
