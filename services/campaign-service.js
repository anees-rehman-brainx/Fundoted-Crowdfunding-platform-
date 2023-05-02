const campaignModal = require("../modals/campaign-modal");
const userModal = require("../modals/user-modal");

//creating campaign
const createCampaign = async(campaign) => {
    const savedCampaign = await new campaignModal(campaign);
    return savedCampaign.save();
}

// get all campaign
const getAllCampaigns = async () => {
    const campaigns = await campaignModal.find();
    return campaigns;
}

// get campaigns of a user
const getCampaignsByUserId = async (cond) => {
    const campaigns = await campaignModal.find(cond);
    return campaigns;
}

// getting campaign by campaign id
const getCampaignById = async (campaignId) => {
    const campaign = await campaignModal.findById(campaignId);
    return campaign;
}

// update campaign
const updateCampaign = async(cond, campaign, options) => {
    const updatedCampaign = await campaignModal.findByIdAndUpdate(cond, campaign, options);
    return updateCampaign;
}

// delete a campaign
const deleteCampaign = async(campaignId) => {
    const isDeleted = await  campaignModal.findOneAndDelete(campaignId);
    return isDeleted;
}

// delete all campaigns
const deleteAllCampaignsOfUser = async(userId) => {
    const isDeleted = await campaignModal.deleteMany(userId);
    return isDeleted;
}



module.exports = {
    createCampaign,
    getAllCampaigns,
    getCampaignById,
    updateCampaign,
    getCampaignsByUserId,
    deleteCampaign,
    deleteAllCampaignsOfUser
}














