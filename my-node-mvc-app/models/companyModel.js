const mongoose = require('mongoose');
const Address = require('./addressModel'); // Adjust the path as necessary

// Define the enums as arrays
const CompanyTypeChoices = ['LLC', 'Corporation', 'Sole Proprietorship'];
const JurisdictionTypeChoices = ['Federal', 'State', 'Local'];
const OPERATING_CHOICES = ['ALONE', 'PARTNER', 'CORPORATE'];
const OPERATION_PREFERENCE_CHOICES = ['REMOTE', 'IN_PERSON', 'HYBRID'];
const StatusChoices = ['INITIAL', 'ACTIVE', 'INACTIVE'];
const SUFFIX_CHOICES = ['Inc', 'LLC', 'Ltd', 'PLC'];

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: false },
    proposedName: { type: String, required: false },
    secondaryProposedName: { type: String, required: false },
    tertiaryProposedName: { type: String, required: false },

    type: { type: String, enum: CompanyTypeChoices, required: false },
    jurisdiction: { type: String, enum: JurisdictionTypeChoices, required: false },
    province: { type: String, required: false },

    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: false },
    phoneNumber: { type: String, maxlength: 17, required: false, alias: 'businessPhoneNumber' },

    operations: { type: String, required: false },

    incorporationArticle: { type: Boolean, default: false },
    isRegistered: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    businessKey: { type: String, required: false, maxlength: 256 },

    isFirstTimeRegistration: { type: Boolean, default: true },
    isOperating: { type: String, enum: OPERATING_CHOICES, default: 'ALONE' },
    businessOperationPreference: { type: String, enum: OPERATION_PREFERENCE_CHOICES, required: false },

    status: { type: String, enum: StatusChoices, default: 'INITIAL', required: false },

    activeStep: { type: String, required: false, default: null },
    suffix: { type: String, enum: SUFFIX_CHOICES, required: false },

    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
}, { timestamps: true });

// Create the model
const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
