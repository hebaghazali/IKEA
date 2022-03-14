import {
  collection,
  where,
  getDocs,
  query,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  orderBy,
  setDoc,
  limit,
  deleteDoc,
  Timestamp,
} from 'firebase/firestore';
import {
  fireStore
} from '../config/firebaseConfig';
import {
  removeFromCart,
  setCartItemAmount,
} from '../store/actions/cartProducts';
import {
  changeLoader
} from './../store/actions/loader';

import {
  changeUser
} from './../store/actions/auth';

import store from './../store/store';

export const getCollection = async (collName, condition = undefined) => {
  const q = condition ?
    query(collection(fireStore, collName), where(...condition)) :
    collection(fireStore, collName);

  let results = await getDocs(q);
  return results.docs;
};

export const addData = data => {
  addDoc(collection(fireStore, 'Products'), data).then(() => {
    console.log('done');
  });
};

export const filterCollection = async (
  collName,
  secondCond,
  condition = undefined
) => {
  const mixedQ = query(
    collection(fireStore, collName),
    where(...condition),
    where(...secondCond)
  );
  let results = await getDocs(mixedQ);
  return results.docs;
};

export const sortCollection = async (condition, sortProp, order) => {
  const sortQ = query(
    collection(fireStore, 'Products'),
    where(...condition),
    orderBy(sortProp, order)
  );

  let results = await getDocs(sortQ);

  return results.docs;
};

export const sortCollectionWithoutCondition = async (sortProp, order) => {
  const sortQ = query(
    collection(fireStore, 'Products'),
    orderBy(sortProp, order)
  );
  let results = await getDocs(sortQ);
  return results.docs;
};

export const updateData = async (collName, ID, data) => {
  await updateDoc(doc(fireStore, collName, ID), data).then(() => {
    console.log('done');
  });
};

export const getDocumentByID = async (collName, ID) => {
  return await getDoc(doc(fireStore, collName, ID)).then(res => {
    return res.data();
  });
};

export const updateUserStorageByID = async ID => {
  return getDoc(doc(fireStore, 'users', ID)).then(res => {
    store.dispatch(changeUser({
      id: ID,
      user: res.data()
    }));
  });
};

export const getCartItemsFromUser = userID => {
  return getDoc(doc(fireStore, 'users', userID)).then(res => {
    return res.data().CartItems;
  });
};

export const addCartItemToUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().CartItems) {
      cartItems.push(...res.data().CartItems);
    }
  });

  if (!cartItems.includes(productID))
    updateDoc(doc(fireStore, 'users', userID), {
      CartItems: [productID, ...cartItems],
    })
    .then(() => {
      console.log('cart items added to current user');
    })
    .catch(err => console.log('adding cart items to user ERROR: ' + err));
};

export const getProductDataById = id => {
  return getDoc(doc(fireStore, 'Products', id)).then(product => {
    return product.data();
  });
};

export const removeCartItemFromUser = async (userID, productID) => {
  let cartItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().CartItems) {
      cartItems.push(...res.data().CartItems);
    }
  });

  await updateDoc(doc(fireStore, 'users', userID), {
    CartItems: cartItems.filter(id => id !== productID),
  });
};
export const addDocByID = async (collName, ID, data) => {
  await setDoc(doc(fireStore, collName, ID), data);
};

// rating
export const addRatingToProduct = async (userID, productID) => {
  let rateVals = [];
  await getDoc(doc(fireStore, 'Products', userID)).then(res => {
    if (res.data().Rating) {
      rateVals.push(...res.data().Rating);
    }
  });

  if (!rateVals.includes(productID))
    updateDoc(doc(fireStore, 'users', userID), {
      Rating: [productID, ...rateVals],
    })
    .then(() => {
      console.log('Rating added to current product');
    })
    .catch(err =>
      console.log('adding Rating to product ERROR: ' + err)
    );
};





// Function that use it in fav page
export const addFavItemsToUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().FavItems) {
      favItems.push(...res.data().FavItems);
    }
  });

  if (!favItems.includes(productID))
    updateDoc(doc(fireStore, 'users', userID), {
      FavItems: [productID, ...favItems],
    })
    .then(() => {
      console.log('Favourite items added to current user');
    })
    .catch(err =>
      console.log('adding Favourite items to user ERROR: ' + err)
    );
};

export const removeFavItemFromUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().FavItems) {
      favItems.push(...res.data().FavItems);
    }
  });

  await updateDoc(doc(fireStore, 'users', userID), {
    FavItems: favItems.filter(id => id !== productID),
  });
};

export const getFavItemsFromUser = userID => {
  return getDoc(doc(fireStore, 'users', userID)).then(res => {
    return res.data().FavItems;
  });
};
// Search

export const getFirst4Categories = async () => {
  const q = query(collection(fireStore, 'subCategory'), limit(4));

  let results = await getDocs(q);

  let categories = [];

  results.forEach(res => {
    categories.push({
      id: res.id,
      data: res.data()
    });
  });

  return categories;
};

export const getProductCatById = id => {
  return getDoc(doc(fireStore, 'ProductCategories', id)).then(
    productCategories => {
      return productCategories.data();
    }
  );
};

export const deleteDocument = (id, collName) => {
  return deleteDoc(doc(fireStore, collName, id));
};

export const getProductsBySearchText = async text => {
  const productsNames = [];
  const productsDescription = [];

  const res = await getCollection('Products');
  // res.filter(product => product.data().Name.includes(text.to))

  res.forEach(product => {
    productsNames.push(product.data().Name);
    product.data().Description &&
      productsDescription.push(product.data().Description);
  });

  const filteredProductsByName = productsNames.filter(product =>
    text.test(product)
  );
  const filteredProductsByDescription = productsDescription.filter(product =>
    text.test(product)
  );

  const filteredProducts = [
    ...filteredProductsByName,
    ...filteredProductsByDescription,
  ];

  // console.log(filteredProducts);

  // Query

  let products = [];

  const productsRes = filteredProducts.map(async description => {
    const nameQuery = query(
      collection(fireStore, 'Products'),
      where('Name', '==', description)
    );

    const descriptionQuery = query(
      collection(fireStore, 'Products'),
      where('Description', '==', description)
    );

    let namesResults = await getDocs(nameQuery);
    let descResults = await getDocs(descriptionQuery);

    namesResults.forEach(result =>
      products.push({
        id: result.id,
        data: result.data()
      })
    );
    descResults.forEach(result => {
      !products.some(p => p.id === result.id) &&
        products.push({
          id: result.id,
          data: result.data()
        });
    });

    return products;
  });

  return productsRes[productsRes.length - 1];
};

export const setUserLocation = async (userID, locationData) => {
  const locations = [];

  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().Locations) {
      locations.push(...res.data().Locations);
    }
  });

  updateDoc(doc(fireStore, 'users', userID), {
      Locations: [locationData, ...locations],
    })
    .then(() => {
      console.log('Location added to current user');
    })
    .catch(err => console.log('adding location to user ERROR: ' + err));
};

export const createNewOrder = async data => {
  await addDoc(collection(fireStore, 'Orders'), {
      CreatedAt: data.createdAt,
      Items: data.items,
      Status: data.status,
      TotalPrice: data.totalPrice,
      UserID: data.userId,
      CheckedAddress: data.checkedAddress,
    })
    .then(async newDoc => {
      let purchased = [];
      await getDoc(doc(fireStore, 'users', data.userId)).then(res => {
        if (res.data().Purchased) {
          purchased.push(...res.data().Purchased);
        }
      });
      updateDoc(doc(fireStore, 'users', data.userId), {
        Purchased: [newDoc.id, ...purchased],
        CartItems: [],
      });
    })
    .then(() => {
      data.items.map(async item => {
        const res = await getDocumentByID('Products', item.ProductID);
        updateData('Products', item.ProductID, {
          Quantity: item.Amount > res.Quantity ? 0 : res.Quantity - item.Amount,
        });
        store.dispatch(removeFromCart(item.ProductID));
        store.dispatch(setCartItemAmount(item.ProductID, 0));
        console.log('hereeee');
      });
    });
};