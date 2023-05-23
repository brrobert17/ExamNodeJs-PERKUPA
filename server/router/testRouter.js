import {Router} from "express";
import {storageImagesRef} from "../config/firebase.js";
import {ref, getDownloadURL} from "firebase/storage";
import multer from 'multer';
import {giveCurrentDateTime} from "../utils/utils.js";
import {deleteImage, uploadImage} from "../service/firebaseStorageService.js";
import {createDoc, deleteDocById, readDocById, readDocs, updateDocById} from "../service/mongoDBService.js";

const router = Router();
const upload = multer().single('image');

router.get("/test", (req, res) => {
    res.send({data: giveCurrentDateTime()});
})
router.get("/test/docs", async (req, res) => {
    const docs = await readDocs("testCollection").catch((error) => {
        console.log(error);
        res.status(418).send(error);
    });
    res.send(docs);
});
router.get("/test/docs/:id", async (req, res) => {
    const doc = await readDocById("testCollection", req.params.id).catch((error) => {
        console.log(error);
        res.status(418).send(error);
    });
    res.send(doc);
});
router.post("/test/docs", async (req, res) => {
    const doc = await createDoc("testCollection", req.body)
        .catch((error) => {
            console.log(error);
            res.status(418).send(error);
        });
    res.send(doc);
});
router.delete("/test/docs/:id", async (req, res) => {
    const doc = await deleteDocById("testCollection", req.params.id)
        .catch((error) => {
            console.log(error);
            res.status(418).send(error);
        });
    res.send({...doc, id: req.params.id});
});

router.patch("/test/docs/:id", async (req, res) => {
    const doc = await updateDocById("testCollection", req.params.id, req.body)
        .catch((error) => {
            console.log(error);
            res.status(418).send(error);
        });
    res.send(doc);
});
router.get("/test/images", async (req, res) => {

    const imageRef = ref(storageImagesRef, '/perkupa1c.png');
    let url;
    await getDownloadURL(imageRef).then((res) => {
        url = res;
    });
    res.send({data: url});

})

router.post("/test/images", upload, async (req, res) => {
    const result = await uploadImage(req.body.file).catch((error) => {
        console.log(error);
        res.status(418).send(error);
    });
    res.send(result);
});

router.delete("/test/images/:filename", async (req, res) => {
    await deleteImage(req.params.filename).catch((error) => {
        console.log(error);
        res.status(418).send(error);
    });
    res.send({message: `${req.params.filename} deleted`});
});
export default router;