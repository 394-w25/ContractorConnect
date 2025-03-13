import benLogo from '../components/logos/Ben Benjamin - Logo.svg';
import connorLogo from '../components/logos/Connor construct - Logo.svg';
import bobLogo from '../components/logos/Bob Builder - Logo.svg';
import marioLogo from '../components/logos/Mario & Luigi Renovations - Logo.svg';
import handyLogo from '../components/logos/Handy Manny\'s Services - Logo.svg';
import dunderLogo from '../components/logos/Dunder Mifflin Maintenance - Logo.svg';
import peteLogo from '../components/logos/Pete\'s Painting - Logo.svg';
import acmeLogo from '../components/logos/Acme Home Services - Logo.svg';
import weasleyLogo from '../components/logos/Weasley\'s Renovations - Logo.svg';
import toolmanLogo from '../components/logos/The Toolman Services - Logo.svg';


export const jobRequests = {

    0 : {
        name: "Son's Room", 
        isIndoor: "Indoor",
        sqft: 1000,
        ceilingHeight: {
            ft: 8,
            in: 2
        },
        wallMaterial: "Drywall", 
        paintType: "Glossy", 
        numColors: 2,
        preperationNeeded: "None",
        wallCondition: "Clean & Smooth",
        numCoats: 2,
        schedule: "ASAP",
        otherServices: "None",
        desc: "Want to reapint my soon's room. Needs to be a shade a green because that's his favorite color. Walls are good condition",
        img: "https://s42814.pcdn.co/wp-content/uploads/2020/01/Idea-House_Nov-2018_pg-46.0-1-scaled.jpg.optimal.jpg",
        contractorName: null
    }, 

    1 : {
        name: "Home Office", 
        isIndoor: "Indoor",
        sqft: 900,
        ceilingHeight: {
            ft: 8,
            in: 0
        },
        wallMaterial: "Drywall", 
        paintType: "Eggshell", 
        numColors: 1,
        preperationNeeded: "Wall Patching",
        wallCondition: "Minor Damage",
        numCoats: 2,
        schedule: "Within 1 Week",
        otherServices: "Trim Painting",
        desc: "The home office needs a fresh coat of eggshell paint in a single color. The walls have minor damage and require patching before painting. Additionally, the trim will be painted to match the new wall color. The job should be completed within 1 week.",
        img: "https://st.hzcdn.com/simgs/99a1989c01d8792d_14-3218/_.jpg",
        contractorName: null
    },

    2: {
        name: "Dining Room", 
        isIndoor: "Indoor",
        sqft: 1100,
        ceilingHeight: {
            ft: 9,
            in: 0
        },
        wallMaterial: "Plaster", 
        paintType: "Glossy", 
        numColors: 2,
        preperationNeeded: "Wall Cleaning",
        wallCondition: "Clean & Smooth",
        numCoats: 1,
        schedule: "ASAP",
        otherServices: "None",
        desc: "The dining room requires a glossy paint job in two colors. The walls are clean and smooth, so only light cleaning is needed before painting. The job is urgent and should be completed as soon as possible.",
        img: "https://studio-mcgee.com/wp-content/app/uploads/2024/01/studiomcgee-McGeeHome-20231005-0027.jpg",
        contractorName: null
    }

}

export const contractors = { 
    "ben_benjamin": {
        "name": "Ben Benjamin",
        "phone": "(212) 555-3847",
        "website": "www.benjaminin.com",
        "verified": true,
        "rating": 4.7,
        "numReviews": 187,
        "costPerGal": 33,
        "addMatFee": 33,
        "laborCost": 2.25,
        "logo": benLogo,
        "quote": 350,
        "contractors-needed": 2,
        "days": 2,
        "materials": 75,
        "labor": 75,
        "equipment": 75,
        "pdf": "https://drive.google.com/file/d/1fRbJfeSIo4LfvWnzLF7iWOYRrj3EZ0W5/view?usp=sharing"
    },
    "connor_construct": {
        "name": "Connor Construct",
        "phone": "(415) 555-9238",
        "website": "www.connorconstruct.com",
        "verified": true,
        "rating": 4.3,
        "numReviews": 125,
        "costPerGal": 46,
        "addMatFee": 28,
        "laborCost": 3.1,
        "logo": connorLogo,
        "quote": 300,
        "contractors-needed": 3,
        "days": 3,
        "materials": 60,
        "labor": 90,
        "equipment": 45,
        "pdf": "https://drive.google.com/file/d/1ll0H4vFWaYKxATcn-cHjILFIctjPTjB3/view?usp=drive_link"
    },
    "bob_builder": {
        "name": "Bob Builder",
        "phone": "(305) 555-1672",
        "website": "www.bobbuilder.com",
        "verified": true,
        "rating": 4.8,
        "numReviews": 1256,
        "costPerGal": 42,
        "addMatFee": 45,
        "laborCost": 2.85,
        "logo": bobLogo,
        "quote": 310,
        "contractors-needed": 4,
        "days": 2,
        "materials": 85,
        "labor": 65,
        "equipment": 80,
        "pdf": "https://drive.google.com/file/d/1um9uBpBR-0HDafxvIaR1xwQr-50z6zLj/view?usp=drive_link"
    },
    "mario_luigi_renovations": {
        "name": "Mario & Luigi Renovations",
        "phone": "(713) 555-8294",
        "website": "www.marioandluigirenovations.com",
        "verified": false,
        "rating": 3.9,
        "numReviews": 56,
        "costPerGal": 39,
        "addMatFee": 20,
        "laborCost": 2.75,
        "logo": marioLogo,
        "quote": 370,
        "contractors-needed": 2,
        "days": 4,
        "materials": 95,
        "labor": 70,
        "equipment": 60,
        "pdf": "https://drive.google.com/file/d/1fRbJfeSIo4LfvWnzLF7iWOYRrj3EZ0W5/view?usp=sharing"
    }
    // "handy_manny_services": {
    //     "name": "Handy Manny's Services",
    //     "phone": "(404) 555-3961",
    //     "website": "www.handymannysservices.com",
    //     "verified": false,
    //     "rating": 3.7,
    //     "numReviews": 42,
    //     "costPerGal": 36,
    //     "addMatFee": 15,
    //     "laborCost": 2.4,
    //     "logo": handyLogo,
    //     "quote": 410,
    //     "contractors-needed": 1,
    //     "days": 5,
    //     "materials": 50,
    //     "labor": 80,
    //     "equipment": 40
    // },
    // "dunder_mifflin_maintenance": {
    //     "name": "Dunder Mifflin Maintenance",
    //     "phone": "(312) 555-7428",
    //     "website": "www.dundermifflinmaintenance.com",
    //     "verified": false,
    //     "rating": 3.1,
    //     "numReviews": 893,
    //     "costPerGal": 29,
    //     "addMatFee": 10,
    //     "laborCost": 1.95,
    //     "logo": dunderLogo,
    //     "quote": 400,
    //     "contractors-needed": 3,
    //     "days": 3,
    //     "materials": 40,
    //     "labor": 55,
    //     "equipment": 30
    // },
    // "petes_painting": {
    //     "name": "Pete's Painting",
    //     "phone": "(702) 555-2093",
    //     "website": "www.petespainting.com",
    //     "verified": true,
    //     "rating": 4.5,
    //     "numReviews": 176,
    //     "costPerGal": 40,
    //     "addMatFee": 37,
    //     "laborCost": 2.6,
    //     "logo": peteLogo,
    //     "quote": 390,
    //     "contractors-needed": 2,
    //     "days": 2,
    //     "materials": 90,
    //     "labor": 85,
    //     "equipment": 50
    // },
    // "acme_home_services": {
    //     "name": "Acme Home Services",
    //     "phone": "(206) 555-6741",
    //     "website": "www.acmehomeservices.com",
    //     "verified": true,
    //     "rating": 4.9,
    //     "numReviews": 28,
    //     "costPerGal": 30,
    //     "addMatFee": 12,
    //     "laborCost": 2.15,
    //     "logo": acmeLogo,
    //     "quote": 410,
    //     "contractors-needed": 4,
    //     "days": 1,
    //     "materials": 65,
    //     "labor": 95,
    //     "equipment": 85
    // },
    // "weasleys_renovations": {
    //     "name": "Weasley's Renovations",
    //     "phone": "(617) 555-9025",
    //     "website": "www.weasleysrenovations.com",
    //     "verified": false,
    //     "rating": 3.4,
    //     "numReviews": 63,
    //     "costPerGal": 49,
    //     "addMatFee": 50,
    //     "laborCost": 3.25,
    //     "logo": weasleyLogo,
    //     "quote": 400,
    //     "contractors-needed": 5,
    //     "days": 4,
    //     "materials": 80,
    //     "labor": 60,
    //     "equipment": 70
    // },
    // "toolman_services": {
    //     "name": "The Toolman Services",
    //     "phone": "(303) 555-4182",
    //     "website": "www.thetoolmanservices.com",
    //     "verified": false,
    //     "rating": 3.6,
    //     "numReviews": 89,
    //     "costPerGal": 37,
    //     "addMatFee": 25,
    //     "laborCost": 2.5,
    //     "logo": toolmanLogo,
    //     "quote": 340,
    //     "contractors-needed": 3,
    //     "days": 2,
    //     "materials": 70,
    //     "labor": 80,
    //     "equipment": 55
    // }
}