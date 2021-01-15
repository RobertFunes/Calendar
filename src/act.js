import { db } from "./firebase/firebaseConfig";






export const startNewAct=(item)=>{
    return async(dispatch2,getState)=>{
        const uid=getState().auth.uid;
        const newAct=item;
        await db.collection(`${uid}/calendar/acts`).add(newAct);
    }
}

export const loadActs= async (uid)=>{
    
    const actsSnap = await db.collection(`${uid}/calendar/acts`).get();
        const acts=[];
    
        actsSnap.forEach(actsChild=>{
            acts.push({
                id:actsChild.id,
                ...actsChild.data()
        })
    });
    
    console.log(acts);

    return acts;
}