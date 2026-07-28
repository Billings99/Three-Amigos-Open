import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

import { db } from "./firebase";

export async function updateScore(player, hole, score) {

  await setDoc(

    doc(db, "scores", player),

    {

      [hole]: score

    },

    { merge: true }

  );

}

export function watchScores(callback) {

  return onSnapshot(collection(db, "scores"), snapshot => {

    const scores = {};

    snapshot.forEach(doc => {

      scores[doc.id] = doc.data();

    });

    callback(scores);

  });

}
