import { collection, where, getDocs, query } from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoader } from './../store/actions/loader';
import store from './../store/store';

export const getCollection = async (collName, condition = undefined) => {
  //dispatch loading
  store.dispatch(changeLoader(true));

  const q = condition
    ? query(collection(fireStore, collName), where(...condition))
    : collection(fireStore, collName);

  let results = await getDocs(q);
  store.dispatch(changeLoader(false));

  //dispatch finish loading

  return results.docs;
};
