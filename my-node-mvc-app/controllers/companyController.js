const User = require('../models/userModel');
const Company = require('../models/companyModel');
const Address = require('../models/addressModel');
// // Display all users
// exports.createCompany = async (req, res) => {
//     const address = new Address({
//         street: '123 Main St',
//         city: 'Faisalabad',
//         state: 'Punjab',
//         postalCode: '38000',
//         country: 'Pakistan'
//     });

//     await address.save();

//     const company = new Company({
//         name: 'My Company',
//         proposedName: 'My Proposed Company',
//         address: address._id,
//         phoneNumber: '123-456-7890',
//         operations: 'E-commerce',
//         businessKey: 'KEY-1234'
//     });

//     await company.save();
//     res.json(company);
// };


exports.createCompany = async (req, res) => {
    const newCompany = new Company(req.body);
    try {
        await newCompany.save();
        res.json(newCompany);
    } catch (err) {
        res.status(400).send(err);
    }
};

/*
            // To populate multiple fields at once:
            const companies = await Company.find()
            .populate('address')     
            .populate('owner')       
            .populate('department');     

*/
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate('address'); // Populate the address field
        res.json(companies);
    } catch (err) {
        res.status(500).send(err);
    }
};