import mongoose from "mongoose";

const estateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    netM: { type: String, required: true },
    brutM: { type: String, required: true },
    roomC: { type: String, required: true },
    aidat: { type: String, required: true },
    furnished: { type: Boolean, required: true, default: false },
    floor: { type: String, required: true },
    park: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    imagelink1: { type: String, required: false, default: null },
    imagelink2: { type: String, required: false, default: null },
    imagelink3: { type: String, required: false, default: null },
    imagelink4: { type: String, required: false, default: null },
})

const Estate = mongoose.model("Estate", estateSchema);
export default Estate;  