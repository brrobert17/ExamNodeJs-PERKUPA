import {updateDocById} from "../service/mongoDBService.js";

export const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.toLocaleDateString("se");
    const time = today.toLocaleTimeString();
    return date + '-' + time;
};

export const handleConcert = (concert, pcs) => {

    // await updateDocById("concerts", req.params.id, cNoId).then(data => {
    //         console.log(data);
    //     }
    // );
};

export const handleUser = () => {

}