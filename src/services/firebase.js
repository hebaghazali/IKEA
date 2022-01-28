import { collection, where, getDocs, query } from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';

export const getCollection = async (collName, condition = undefined) => {
  //dispatch loading

  const q = condition
    ? query(collection(fireStore, collName), where(...condition))
    : collection(fireStore, collName);

  let results = await getDocs(q);
  //dispatch finish loading

  return results.docs;
};
