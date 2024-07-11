import Estate from "../models/estate.js";

const createEstate = async (req, res) => {
    try {
        const newEstate = new Estate(req.body);
        const savedEstate = await newEstate.save();
        res.json(savedEstate)
    } catch (error) {
        console.error(error)
        res.status(500).send("estate olusturulamadı")
    }

}

const getAllEstate = async (req, res) => {
    try {
        const allEstate = await Estate.find({});
        res.json(allEstate);
    } catch (error) {
        console.log(error.message);
        res.send("Estate alınamadı.")
    }
}

const deleteEstate = async (req, res) => {
    try {
        const { id } = req.params;
        const estate = await Estate.findByIdAndDelete(id);
        if (!estate) {
            return res.status(404).send("estate bulunamadı.");
        }
        res.send("estate başarılı bir şekilde silindi.")
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }

}

export { createEstate, getAllEstate, deleteEstate };

