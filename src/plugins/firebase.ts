import { firebaseConfig } from "./config";
import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence()
  .catch(err => {
    if (err.code === "failed-precondition") {
      throw new Error(
        "multiple tabs open, persistence can only be enabled in one tab at a time."
      );
    } else if (err.code === "unimplemented") {
      throw new Error(
        "The current browser does not support all of the features required to enable persistence."
      );
    }
  });

export const Firestore = firebase.firestore();
