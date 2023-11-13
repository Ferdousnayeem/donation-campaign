import { toast } from "react-toastify";

const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
        return JSON.parse(storedDonations);
    } else {
        return []
    }
}

const saveDonation = (id) => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donation => donation === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations))
        toast.success(`Thank you. You have donate successfully.`);
    }else{
        toast.warn(`Already donated for this one.`)
    }
}

export {getStoredDonations, saveDonation};