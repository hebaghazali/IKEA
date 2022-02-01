import { collection, where, getDocs, query ,addDoc, updateDoc, doc, getDoc} from 'firebase/firestore';
import { fireStore } from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoader } from './../store/actions/loader';
import { changeUser } from './../store/actions/auth';
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

export const addData=(data)=>{
  addDoc(collection(fireStore,'Products'),data).then(()=>{
    console.log("done");
  });
}

export const filterProducts = async (collName, condition = undefined , secondCond) => {
  //dispatch loading
  store.dispatch(changeLoader(true));

  const q = condition
    ? query(collection(fireStore, collName), where(...condition))
    : collection(fireStore, collName);
  const mixedQ=query(collection(fireStore, collName), where(...condition),where(...secondCond))
  let results = await getDocs(mixedQ);
  store.dispatch(changeLoader(false));

  //dispatch finish loading

  return results.docs;
};

export const sortCollection=async(sortQuery,collection='Products')=>{

}

export const updateData=async(collName,ID,data)=>{
  await updateDoc(doc(fireStore,collName,ID),data).then(()=>{
    console.log("done");
  });
}

export const getDocumentByID=(collName,ID)=>{
  getDoc(doc(fireStore,collName,ID)).then((res)=>{
    return res.data();
  })
}

export const updateUserStorageByID=(ID)=>{
  getDoc(doc(fireStore,'users',ID)).then((res)=>{
    store.dispatch(changeUser({id:ID,user:res.data()}));
  })
}