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
} from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';
import { changeUser } from './../store/actions/auth';
import store from './../store/store';

export const getCollection = async (collName, condition = undefined) => {
  const q = condition
    ? query(collection(fireStore, collName), where(...condition))
    : collection(fireStore, collName);

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
    store.dispatch(changeUser({ id: ID, user: res.data() }));
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

// Function that use it in fav page
export const addFavItemsToUser = async (userID, productID) => {
  let favItems = [];
  await getDoc(doc(fireStore, 'users', userID)).then(res => {
    if (res.data().FavItems) {
      favItems.push(...res.data().FavItems);
    }
  });

  updateDoc(doc(fireStore, 'users', userID), {
    FavItems: [productID, ...favItems],
  })
    .then(() => {
      console.log('Favourite items added to current user');
    })
    .catch(err => console.log('adding Favourite items to user ERROR: ' + err));
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
    categories.push({ id: res.id, data: res.data() });
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
      products.push({ id: result.id, data: result.data() })
    );
    descResults.forEach(result => {
      !products.some(p => p.id === result.id) &&
        products.push({ id: result.id, data: result.data() });
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
  }).then(async newDoc => {
    let purchased = [];
    await getDoc(doc(fireStore, 'users', data.userId)).then(res => {
      if (res.data().Purchased) {
        purchased.push(...res.data().Purchased);
      }
    });
    updateDoc(doc(fireStore, 'users', data.userId), {
      Purchased: [newDoc.id, ...purchased],
    });
  });
};

export const getLatestProds = async () => {
  const q = query(collection(fireStore, 'Products'),orderBy('CreatedAt','desc'), limit(10));

  let results = await getDocs(q);

  return results.docs;
};

export const genericFilter = async (filterObj) => {
  let keys = Object.keys(filterObj);
  let mixedQ = null;
  let sort = null;

  keys.forEach((item) => {
    if (!filterObj[item]) {
      delete filterObj[item];
    }

    if (item === 'Sort') {
      sort = filterObj[item];
      delete filterObj[item];
    }

  });

  keys=Object.keys(filterObj);

  let length =keys.length;
  

  let results = [];
  let err=null;

  try {
    if(sort){
      switch (length) {
        case 0:
          mixedQ = query(collection(fireStore, 'Products'), orderBy(...sort));
          break;
        case 1:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            orderBy(...sort)
          );
          break;
  
        case 2:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            orderBy(...sort)
          );
          break;
  
        case 3:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            orderBy(...sort)
          );
          break;
  
          case 4:
            mixedQ = query(
              collection(fireStore, 'Products'),
              where(...filterObj[keys[0]]),
              where(...filterObj[keys[1]]),
              where(...filterObj[keys[2]]),
              where(...filterObj[keys[3]]),
              orderBy(...sort)
            );
            break;
        case 5:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            where(...filterObj[keys[4]]),
            orderBy(...sort)
          );
          break;
        case 6:
            mixedQ = query(
              collection(fireStore, 'Products'),
              where(...filterObj[keys[0]]),
              where(...filterObj[keys[1]]),
              where(...filterObj[keys[2]]),
              where(...filterObj[keys[3]]),
              where(...filterObj[keys[4]]),
              where(...filterObj[keys[5]]),
              orderBy(...sort)
            );
          break;       
        case 7:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            where(...filterObj[keys[4]]),
            where(...filterObj[keys[5]]),
            where(...filterObj[keys[6]]),
            orderBy(...sort)
          );
        break;
        default:
          break;
      }
      
    }else{
      switch (length) {
        case 1:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]])
          );
          break;
  
        case 2:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]])
          );
          break;
  
        case 3:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]])
          );
          break;
  
          case 4:
            mixedQ = query(
              collection(fireStore, 'Products'),
              where(...filterObj[keys[0]]),
              where(...filterObj[keys[1]]),
              where(...filterObj[keys[2]]),
              where(...filterObj[keys[3]])
            );
            break;
        case 5:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            where(...filterObj[keys[4]])
          );
          break;
        case 6:
            mixedQ = query(
              collection(fireStore, 'Products'),
              where(...filterObj[keys[0]]),
              where(...filterObj[keys[1]]),
              where(...filterObj[keys[2]]),
              where(...filterObj[keys[3]]),
              where(...filterObj[keys[4]]),
              where(...filterObj[keys[5]])
            );
          break;       
        case 7:
          mixedQ = query(
            collection(fireStore, 'Products'),
            where(...filterObj[keys[0]]),
            where(...filterObj[keys[1]]),
            where(...filterObj[keys[2]]),
            where(...filterObj[keys[3]]),
            where(...filterObj[keys[4]]),
            where(...filterObj[keys[5]]),
            where(...filterObj[keys[6]])
          );
          break;
        default:
          break;
      }
    }
    
    
    results=await getDocs(mixedQ);
    
  } catch (error) {
    console.log('error in filter fun',error);
    err=error    
  }
  if(sort)
    filterObj['Sort']=sort;


  return err?err: results.docs;
};
