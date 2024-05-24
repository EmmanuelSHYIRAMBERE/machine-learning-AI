const express = require("express");
const { NlpManager } = require("node-nlp");

const app = express();
const port = 3000;

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Greetings
manager.addDocument("en", "goodbye for now", "greetings.bye");
manager.addDocument("en", "bye bye take care", "greetings.bye");
manager.addDocument("en", "okay see you later", "greetings.bye");
manager.addDocument("en", "bye for now", "greetings.bye");
manager.addDocument("en", "i must go", "greetings.bye");
manager.addDocument("en", "hello", "greetings.hello");
manager.addDocument("en", "hi", "greetings.hello");
manager.addDocument("en", "howdy", "greetings.hello");
manager.addDocument("en", "hey", "greetings.hello");
manager.addDocument("en", "good morning", "greetings.hello");
manager.addDocument("en", "good afternoon", "greetings.hello");
manager.addDocument("en", "good evening", "greetings.hello");

manager.addAnswer("en", "greetings.bye", "Till next time");
manager.addAnswer("en", "greetings.bye", "See you soon!");
manager.addAnswer("en", "greetings.bye", "Goodbye!");
manager.addAnswer("en", "greetings.hello", "Hey there!");
manager.addAnswer("en", "greetings.hello", "Greetings!");
manager.addAnswer(
  "en",
  "greetings.hello",
  "Hello! How can I assist you today?"
);
manager.addAnswer("en", "greetings.hello", "Hi! What can I do for you today?");

// BAZAFARM Technology

// What is BAZAFARM?
manager.addDocument("en", "What is BAZAFARM?", "bazafarm.technology");
manager.addDocument("en", "Explain BAZAFARM technology", "bazafarm.technology");
manager.addDocument("en", "Tell me about BAZAFARM", "bazafarm.technology");

manager.addAnswer(
  "en",
  "bazafarm.technology",
  "BAZAFARM is a solar-powered IoT device that measures water level, soil temperature, and soil fertility in real time. It allows farmers to access this data on their mobile devices, tablets, or PCs via the Internet, helping them make informed decisions for optimal crop growth."
);

// How does BAZAFARM work?
manager.addDocument("en", "How does BAZAFARM work?", "bazafarm.working");
manager.addDocument(
  "en",
  "Explain the functionality of BAZAFARM",
  "bazafarm.working"
);
manager.addDocument(
  "en",
  "What is the working principle of BAZAFARM?",
  "bazafarm.working"
);

manager.addAnswer(
  "en",
  "bazafarm.working",
  "BAZAFARM devices use IoT technology and operate in a network of sensor nodes to collect and transmit data to a central master device, which then sends the data to the Internet. Even in farms less than 5 hectares, a standalone device can efficiently measure and transmit data for informed decision-making."
);

// Benefits of BAZAFARM
manager.addDocument(
  "en",
  "What are the benefits of BAZAFARM?",
  "bazafarm.benefits"
);
manager.addDocument("en", "Advantages of using BAZAFARM", "bazafarm.benefits");
manager.addDocument(
  "en",
  "How does BAZAFARM help farmers?",
  "bazafarm.benefits"
);

manager.addAnswer(
  "en",
  "bazafarm.benefits",
  "BAZAFARM offers several benefits such as optimizing water and fertilizer usage, improving crop production quality, enabling collection and storage of big data for analysis, and providing access to weather forecasts for better farm management."
);

// BAZAFARM Technology

// How can BAZAFARM help with water conservation?
manager.addDocument(
  "en",
  "How does BAZAFARM help in water conservation?",
  "bazafarm.waterConservation"
);
manager.addDocument(
  "en",
  "What role does BAZAFARM play in conserving water?",
  "bazafarm.waterConservation"
);
manager.addDocument(
  "en",
  "Does BAZAFARM contribute to water conservation?",
  "bazafarm.waterConservation"
);

manager.addAnswer(
  "en",
  "bazafarm.waterConservation",
  "BAZAFARM helps in water conservation by providing real-time data on soil moisture levels, allowing farmers to optimize irrigation schedules and reduce water wastage. It ensures that crops receive the right amount of water, leading to efficient water usage."
);

// Can BAZAFARM improve crop yields during drought conditions?
manager.addDocument(
  "en",
  "Can BAZAFARM improve crop yields during drought?",
  "bazafarm.droughtYields"
);
manager.addDocument(
  "en",
  "Does BAZAFARM help in achieving better yields during drought?",
  "bazafarm.droughtYields"
);
manager.addDocument(
  "en",
  "How effective is BAZAFARM in drought conditions?",
  "bazafarm.droughtYields"
);

manager.addAnswer(
  "en",
  "bazafarm.droughtYields",
  "BAZAFARM can improve crop yields during drought conditions by ensuring optimal water management. It monitors soil moisture levels and provides insights to farmers, helping them make informed decisions to mitigate the impact of drought on crop production."
);

// Can BAZAFARM suggest specific fertilization plans based on soil data?
manager.addDocument(
  "en",
  "Does BAZAFARM suggest fertilization plans?",
  "bazafarm.fertilizationPlans"
);
manager.addDocument(
  "en",
  "Can BAZAFARM recommend fertilization based on soil data?",
  "bazafarm.fertilizationPlans"
);
manager.addDocument(
  "en",
  "How does BAZAFARM assist in fertilization?",
  "bazafarm.fertilizationPlans"
);

manager.addAnswer(
  "en",
  "bazafarm.fertilizationPlans",
  "Yes, BAZAFARM can suggest specific fertilization plans based on real-time soil data. It analyzes soil fertility levels and recommends the appropriate type and amount of fertilizers, ensuring optimal nutrient supply for healthy crop growth."
);

// Does BAZAFARM provide pest and disease alerts?
manager.addDocument(
  "en",
  "Does BAZAFARM offer pest and disease alerts?",
  "bazafarm.pestDiseaseAlerts"
);
manager.addDocument(
  "en",
  "Can BAZAFARM detect pests and diseases?",
  "bazafarm.pestDiseaseAlerts"
);
manager.addDocument(
  "en",
  "How does BAZAFARM help in pest and disease management?",
  "bazafarm.pestDiseaseAlerts"
);

manager.addAnswer(
  "en",
  "bazafarm.pestDiseaseAlerts",
  "BAZAFARM can provide alerts for pest infestations and potential disease outbreaks. It monitors environmental conditions and crop health indicators, enabling early detection and proactive management strategies to prevent crop damage."
);

// Real Time Data for BAZAFARM
manager.addDocument(
  "en",
  "How does BAZAFARM provide real-time data?",
  "bazafarm.realtime.data"
);
manager.addDocument(
  "en",
  "Explain real-time data in BAZAFARM",
  "bazafarm.realtime.explanation"
);
manager.addDocument(
  "en",
  "What are the benefits of real-time data in BAZAFARM?",
  "bazafarm.realtime.benefits"
);

manager.addAnswer(
  "en",
  "bazafarm.realtime.data",
  "BAZAFARM provides real-time data by continuously monitoring water levels, soil conditions, and environmental factors using its IoT sensors and network infrastructure."
);
manager.addAnswer(
  "en",
  "bazafarm.realtime.explanation",
  "Real-time data in BAZAFARM means that farmers can access up-to-the-minute information about their crops' water needs, soil health, and climate conditions, empowering them to make timely and informed decisions."
);
manager.addAnswer(
  "en",
  "bazafarm.realtime.benefits",
  "The benefits of real-time data in BAZAFARM include precise irrigation management, early detection of issues like water stress or nutrient deficiencies, and overall improved crop health and yield."
);

// Data Analytics for BAZAFARM
manager.addDocument(
  "en",
  "How does BAZAFARM use data analytics?",
  "bazafarm.data.analytics"
);
manager.addDocument(
  "en",
  "Explain data analytics in BAZAFARM",
  "bazafarm.analytics.explanation"
);
manager.addDocument(
  "en",
  "What are the advantages of data analytics in BAZAFARM?",
  "bazafarm.analytics.benefits"
);

manager.addAnswer(
  "en",
  "bazafarm.data.analytics",
  "BAZAFARM uses data analytics to analyze trends, patterns, and correlations in the collected data, allowing farmers to gain insights into crop performance and make data-driven decisions."
);
manager.addAnswer(
  "en",
  "bazafarm.analytics.explanation",
  "Data analytics in BAZAFARM involves processing large datasets from sensors and using algorithms to generate actionable insights, such as optimizing irrigation schedules or identifying areas for improvement."
);
manager.addAnswer(
  "en",
  "bazafarm.analytics.benefits",
  "The advantages of data analytics in BAZAFARM include improved resource efficiency, proactive problem-solving, and enhanced crop management practices based on data-driven recommendations."
);

// Easy to use BAZAFARM
manager.addDocument(
  "en",
  "Is BAZAFARM easy to use?",
  "bazafarm.ease.of.use.question"
);
manager.addDocument(
  "en",
  "What makes BAZAFARM user-friendly?",
  "bazafarm.ease.of.use.benefits"
);
manager.addDocument(
  "en",
  "Explain the setup process of BAZAFARM",
  "bazafarm.ease.of.use.setup"
);

manager.addAnswer(
  "en",
  "bazafarm.ease.of.use.question",
  "Yes, BAZAFARM is designed to be user-friendly and accessible, with intuitive controls and a straightforward setup process."
);
manager.addAnswer(
  "en",
  "bazafarm.ease.of.use.benefits",
  "BAZAFARM's user-friendly interface, clear instructions, and simple setup procedures ensure that farmers can easily adopt and utilize its advanced features for efficient farm management."
);
manager.addAnswer(
  "en",
  "bazafarm.ease.of.use.setup",
  "Setting up BAZAFARM involves following a few simple steps outlined in the user manual or on the platform's interface, making it easy for farmers to integrate this technology into their farming practices."
);

// User Registration
manager.addDocument(
  "en",
  "how do I register a new user",
  "userManagement.register"
);
manager.addDocument(
  "en",
  "steps to create a new user account",
  "userManagement.register"
);
manager.addDocument("en", "register user", "userManagement.register");

manager.addAnswer(
  "en",
  "userManagement.register",
  "To register a new user, go to the registration page, fill out the required details such as name, email, and password, and click 'Register'. You will receive a confirmation email to verify your account."
);

// User Profile Update
manager.addDocument(
  "en",
  "how can I update my profile",
  "userManagement.updateProfile"
);
manager.addDocument(
  "en",
  "edit my user details",
  "userManagement.updateProfile"
);
manager.addDocument(
  "en",
  "update user information",
  "userManagement.updateProfile"
);

manager.addAnswer(
  "en",
  "userManagement.updateProfile",
  "To update your profile, log in to your account, go to the 'Profile' section, make the necessary changes, and click 'Save' to update your information."
);

// Password Reset
manager.addDocument(
  "en",
  "how do I reset my password",
  "authManagement.resetPassword"
);
manager.addDocument("en", "forgot password", "authManagement.resetPassword");
manager.addDocument("en", "recover my account", "authManagement.resetPassword");

manager.addAnswer(
  "en",
  "authManagement.resetPassword",
  "To reset your password, click on the 'Forgot Password' link on the login page, enter your email address, and follow the instructions sent to your email to reset your password."
);

// Two-Factor Authentication
manager.addDocument(
  "en",
  "how do I enable two-factor authentication",
  "authManagement.enable2FA"
);
manager.addDocument("en", "set up 2FA", "authManagement.enable2FA");
manager.addDocument(
  "en",
  "enable 2FA for my account",
  "authManagement.enable2FA"
);

manager.addAnswer(
  "en",
  "authManagement.enable2FA",
  "To enable two-factor authentication, log in to your account, go to the 'Security' settings, and follow the instructions to set up two-factor authentication using an authentication app or SMS."
);

// Adding a Crop
manager.addDocument("en", "how do I add a new crop", "cropManagement.addCrop");
manager.addDocument("en", "steps to add a crop", "cropManagement.addCrop");
manager.addDocument("en", "add crop", "cropManagement.addCrop");

manager.addAnswer(
  "en",
  "cropManagement.addCrop",
  "To add a new crop, go to the 'Crops' section in your dashboard, click 'Add Crop', enter the crop details such as name, type, and planting date, and click 'Save'."
);

// Updating Crop Information
manager.addDocument(
  "en",
  "how do I update crop information",
  "cropManagement.updateCrop"
);
manager.addDocument("en", "edit crop details", "cropManagement.updateCrop");
manager.addDocument("en", "update crop data", "cropManagement.updateCrop");

manager.addAnswer(
  "en",
  "cropManagement.updateCrop",
  "To update crop information, go to the 'Crops' section, select the crop you want to update, make the necessary changes, and click 'Save' to update the crop details."
);

// Farm Information
manager.addDocument("en", "tell me about the farms", "farm.info");
manager.addDocument("en", "what farms do you have", "farm.info");
manager.addDocument("en", "give me information on the farms", "farm.info");
manager.addDocument("en", "list all farms", "farm.info");
manager.addDocument("en", "details about farms", "farm.info");

manager.addAnswer(
  "en",
  "farm.info",
  "We have various farms specializing in different types of crops and livestock. Here are some details:\n1. Farm A: Specializes in organic vegetables.\n2. Farm B: Known for dairy production.\n3. Farm C: Focuses on grain crops. What specific information are you looking for?"
);

// Crop Advice
manager.addDocument("en", "how to grow tomatoes", "crop.advice.tomatoes");
manager.addDocument("en", "tips for growing tomatoes", "crop.advice.tomatoes");
manager.addDocument("en", "advice on tomato farming", "crop.advice.tomatoes");
manager.addDocument(
  "en",
  "best practices for tomatoes",
  "crop.advice.tomatoes"
);

manager.addAnswer(
  "en",
  "crop.advice.tomatoes",
  "To grow tomatoes, ensure you have well-drained soil and full sun exposure. Water them regularly, but avoid waterlogging. Provide support as they grow and watch out for pests and diseases. Prune the plants to encourage better growth."
);

// Crop Diseases
manager.addDocument(
  "en",
  "what diseases affect tomatoes",
  "crop.disease.tomatoes"
);
manager.addDocument("en", "tomato plant diseases", "crop.disease.tomatoes");
manager.addDocument("en", "common tomato diseases", "crop.disease.tomatoes");

manager.addAnswer(
  "en",
  "crop.disease.tomatoes",
  "Common tomato diseases include blight, blossom-end rot, and leaf curl. To prevent these, ensure proper spacing between plants, regular watering, and use of fungicides when necessary."
);

// Adding a Device
manager.addDocument(
  "en",
  "how do I add a new device",
  "deviceManagement.addDevice"
);
manager.addDocument(
  "en",
  "steps to add a device",
  "deviceManagement.addDevice"
);
manager.addDocument("en", "add device", "deviceManagement.addDevice");

manager.addAnswer(
  "en",
  "deviceManagement.addDevice",
  "To add a new device, go to the 'Devices' section in your dashboard, click 'Add Device', enter the device details such as name, type, and serial number, and click 'Save'."
);

// Device Troubleshooting
manager.addDocument(
  "en",
  "how do I troubleshoot a device",
  "deviceManagement.troubleshootDevice"
);
manager.addDocument(
  "en",
  "device troubleshooting steps",
  "deviceManagement.troubleshootDevice"
);
manager.addDocument(
  "en",
  "fix device issues",
  "deviceManagement.troubleshootDevice"
);

manager.addAnswer(
  "en",
  "deviceManagement.troubleshootDevice",
  "To troubleshoot a device, go to the 'Devices' section, select the device you are having issues with, and follow the troubleshooting guide provided. If the issue persists, contact support."
);

// Adding a Farm
manager.addDocument("en", "how do I add a new farm", "farmManagement.addFarm");
manager.addDocument("en", "steps to add a farm", "farmManagement.addFarm");
manager.addDocument("en", "add farm", "farmManagement.addFarm");

manager.addAnswer(
  "en",
  "farmManagement.addFarm",
  "To add a new farm, go to the 'Farms' section in your dashboard, click 'Add Farm', enter the farm details such as name, location, and size, and click 'Save'."
);

// Updating Farm Information
manager.addDocument(
  "en",
  "how do I update farm information",
  "farmManagement.updateFarm"
);
manager.addDocument("en", "edit farm details", "farmManagement.updateFarm");
manager.addDocument("en", "update farm data", "farmManagement.updateFarm");

manager.addAnswer(
  "en",
  "farmManagement.updateFarm",
  "To update farm information, go to the 'Farms' section, select the farm you want to update, make the necessary changes, and click 'Save' to update the farm details."
);

// Fertilization
manager.addDocument(
  "en",
  "fertilization schedule for corn",
  "fertilization.schedule.corn"
);
manager.addDocument(
  "en",
  "corn fertilization tips",
  "fertilization.schedule.corn"
);
manager.addDocument(
  "en",
  "when to fertilize corn",
  "fertilization.schedule.corn"
);

manager.addAnswer(
  "en",
  "fertilization.schedule.corn",
  "Corn should be fertilized at planting and then again when the plants are about 6 inches tall. Use a balanced fertilizer and follow with side-dressing when the plants reach knee-high. Adjust based on soil test results."
);

// Calibrating a Device
manager.addDocument(
  "en",
  "how do I calibrate a device",
  "calibrationManagement.calibrateDevice"
);
manager.addDocument(
  "en",
  "steps to calibrate a device",
  "calibrationManagement.calibrateDevice"
);
manager.addDocument(
  "en",
  "device calibration process",
  "calibrationManagement.calibrateDevice"
);

manager.addAnswer(
  "en",
  "calibrationManagement.calibrateDevice",
  "To calibrate a device, go to the 'Calibration' section, select the device you want to calibrate, follow the on-screen instructions to complete the calibration process, and save the settings."
);

// Calibration Schedule
manager.addDocument(
  "en",
  "how often should I calibrate my devices",
  "calibrationManagement.calibrationSchedule"
);
manager.addDocument(
  "en",
  "device calibration frequency",
  "calibrationManagement.calibrationSchedule"
);
manager.addDocument(
  "en",
  "calibration schedule for devices",
  "calibrationManagement.calibrationSchedule"
);

manager.addAnswer(
  "en",
  "calibrationManagement.calibrationSchedule",
  "Devices should be calibrated based on the manufacturer's recommendations, typically every 6 to 12 months, or when accuracy is critical for data collection. Regular calibration ensures accurate and reliable device performance."
);

// Weather Impact
manager.addDocument("en", "how does weather affect farming", "weather.impact");
manager.addDocument("en", "impact of weather on crops", "weather.impact");
manager.addDocument("en", "weather effects on agriculture", "weather.impact");

manager.addAnswer(
  "en",
  "weather.impact",
  "Weather significantly affects farming. Temperature, rainfall, and wind can influence crop growth, pest prevalence, and soil conditions. Monitoring weather patterns helps in planning and mitigating adverse effects."
);

// Equipment Maintenance
manager.addDocument(
  "en",
  "how to maintain farm equipment",
  "equipment.maintenance"
);
manager.addDocument(
  "en",
  "farm equipment maintenance tips",
  "equipment.maintenance"
);
manager.addDocument(
  "en",
  "best practices for maintaining farm equipment",
  "equipment.maintenance"
);

manager.addAnswer(
  "en",
  "equipment.maintenance",
  "Regular maintenance of farm equipment includes cleaning after use, checking for wear and tear, lubricating moving parts, and performing regular inspections. Store equipment in a dry place to prevent rusting."
);

// Viewing Subscription Details
manager.addDocument(
  "en",
  "how do I view my subscription details",
  "subscriptionManagement.viewSubscription"
);
manager.addDocument(
  "en",
  "check subscription status",
  "subscriptionManagement.viewSubscription"
);
manager.addDocument(
  "en",
  "view my subscription",
  "subscriptionManagement.viewSubscription"
);

manager.addAnswer(
  "en",
  "subscriptionManagement.viewSubscription",
  "To view your subscription details, log in to your account, go to the 'Subscription' section, and you will see all the details related to your current subscription plan."
);

// Updating Subscription Plan
manager.addDocument(
  "en",
  "how do I change my subscription plan",
  "subscriptionManagement.updateSubscription"
);
manager.addDocument(
  "en",
  "upgrade or downgrade subscription",
  "subscriptionManagement.updateSubscription"
);
manager.addDocument(
  "en",
  "update my subscription",
  "subscriptionManagement.updateSubscription"
);

manager.addAnswer(
  "en",
  "subscriptionManagement.updateSubscription",
  "To change your subscription plan, go to the 'Subscription' section, select 'Change Plan', choose the new plan you want to switch to, and confirm your selection."
);

// Help and Support
manager.addDocument("en", "I need help", "support.general");
manager.addDocument("en", "can you help me", "support.general");
manager.addDocument("en", "I have an issue", "support.general");
manager.addDocument("en", "support needed", "support.general");
manager.addDocument("en", "need assistance", "support.general");

manager.addAnswer(
  "en",
  "support.general",
  "Sure, I'm here to help. What seems to be the problem?"
);
manager.addAnswer(
  "en",
  "support.general",
  "Of course! Please describe the issue you're facing."
);
manager.addAnswer(
  "en",
  "support.general",
  "I'm here to assist you. Can you provide more details about the problem?"
);

// Accessing Help Center
manager.addDocument(
  "en",
  "how do I access the help center",
  "helpCenterManagement.accessHelpCenter"
);
manager.addDocument(
  "en",
  "where is the help center",
  "helpCenterManagement.accessHelpCenter"
);
manager.addDocument(
  "en",
  "find the help center",
  "helpCenterManagement.accessHelpCenter"
);

manager.addAnswer(
  "en",
  "helpCenterManagement.accessHelpCenter",
  "To access the Help Center, go to the 'Help' section on our website or app. You can find articles, FAQs, and contact options for further assistance."
);

// Submitting a Support Ticket
manager.addDocument(
  "en",
  "how do I submit a support ticket",
  "helpCenterManagement.submitTicket"
);
manager.addDocument(
  "en",
  "submit a support request",
  "helpCenterManagement.submitTicket"
);
manager.addDocument(
  "en",
  "create a support ticket",
  "helpCenterManagement.submitTicket"
);

manager.addAnswer(
  "en",
  "helpCenterManagement.submitTicket",
  "To submit a support ticket, go to the 'Help Center', click on 'Submit a Ticket', fill out the form with details about your issue, and click 'Submit'. Our support team will get back to you shortly."
);

// Crop Rotation
manager.addDocument("en", "what is crop rotation", "crop.management.rotation");
manager.addDocument("en", "how to rotate crops", "crop.management.rotation");
manager.addDocument(
  "en",
  "benefits of crop rotation",
  "crop.management.rotation"
);

manager.addAnswer(
  "en",
  "crop.management.rotation",
  "Crop rotation is the practice of growing different types of crops in the same area in sequential seasons. It helps improve soil health, reduce pest and weed pressure, and increase crop yield."
);

// Plant Spacing
manager.addDocument(
  "en",
  "how far apart should I plant tomatoes",
  "crop.management.spacing.tomatoes"
);
manager.addDocument(
  "en",
  "tomato plant spacing",
  "crop.management.spacing.tomatoes"
);
manager.addDocument(
  "en",
  "ideal spacing for tomatoes",
  "crop.management.spacing.tomatoes"
);

manager.addAnswer(
  "en",
  "crop.management.spacing.tomatoes",
  "Tomato plants should be spaced about 18 to 24 inches apart to allow for adequate air circulation and sunlight exposure. This helps in preventing diseases and promotes healthy growth."
);

// General Pest Control
manager.addDocument(
  "en",
  "how to control pests in my garden",
  "pest.control.general"
);
manager.addDocument(
  "en",
  "methods to manage garden pests",
  "pest.control.general"
);
manager.addDocument("en", "garden pest control tips", "pest.control.general");

manager.addAnswer(
  "en",
  "pest.control.general",
  "To control pests in your garden, use integrated pest management techniques such as crop rotation, biological controls (like ladybugs), natural pesticides, and maintaining healthy soil. Regular monitoring is key to early detection and control."
);

// Specific Pests
manager.addDocument("en", "how to get rid of aphids", "pest.control.aphids");
manager.addDocument("en", "aphid infestation solution", "pest.control.aphids");
manager.addDocument("en", "methods to control aphids", "pest.control.aphids");

manager.addAnswer(
  "en",
  "pest.control.aphids",
  "To control aphids, you can use insecticidal soap, neem oil, or introduce natural predators like ladybugs. Regularly inspecting plants and removing affected areas can also help manage aphid populations."
);

// Irrigation Techniques
manager.addDocument(
  "en",
  "best irrigation methods for crops",
  "irrigation.methods"
);
manager.addDocument("en", "how to irrigate my farm", "irrigation.methods");
manager.addDocument(
  "en",
  "irrigation techniques for farming",
  "irrigation.methods"
);

manager.addAnswer(
  "en",
  "irrigation.methods",
  "Efficient irrigation methods include drip irrigation, which delivers water directly to the plant roots, and sprinkler systems for larger areas. Ensure you monitor soil moisture and adjust watering schedules based on weather conditions."
);

// Watering Schedule
manager.addDocument(
  "en",
  "how often should I water my garden",
  "irrigation.schedule"
);
manager.addDocument(
  "en",
  "watering frequency for vegetable garden",
  "irrigation.schedule"
);
manager.addDocument("en", "best times to water plants", "irrigation.schedule");

manager.addAnswer(
  "en",
  "irrigation.schedule",
  "Water your garden early in the morning or late in the afternoon to reduce evaporation. Generally, vegetable gardens need about 1 inch of water per week, but this can vary depending on the crop and weather conditions."
);

// Benefits of Organic Farming
manager.addDocument(
  "en",
  "why should I practice organic farming",
  "organic.farming.benefits"
);
manager.addDocument(
  "en",
  "advantages of organic farming",
  "organic.farming.benefits"
);
manager.addDocument(
  "en",
  "benefits of going organic",
  "organic.farming.benefits"
);

manager.addAnswer(
  "en",
  "organic.farming.benefits",
  "Organic farming offers numerous benefits, including improved soil health, reduced chemical usage, better biodiversity, and potentially higher market value for crops. It also promotes a healthier environment and food quality."
);

// Organic Fertilizers
manager.addDocument(
  "en",
  "what are the best organic fertilizers",
  "organic.fertilizers"
);
manager.addDocument(
  "en",
  "recommend some organic fertilizers",
  "organic.fertilizers"
);
manager.addDocument("en", "organic fertilizer options", "organic.fertilizers");

manager.addAnswer(
  "en",
  "organic.fertilizers",
  "Some of the best organic fertilizers include compost, manure, bone meal, fish emulsion, and green manure. These provide essential nutrients while improving soil structure and fertility."
);

// Yellow Leaves
manager.addDocument(
  "en",
  "why are my plant leaves turning yellow",
  "troubleshooting.yellow.leaves"
);
manager.addDocument(
  "en",
  "causes of yellow leaves on plants",
  "troubleshooting.yellow.leaves"
);
manager.addDocument(
  "en",
  "yellow leaves issue",
  "troubleshooting.yellow.leaves"
);

manager.addAnswer(
  "en",
  "troubleshooting.yellow.leaves",
  "Yellow leaves can be caused by overwatering, underwatering, nutrient deficiencies, or pests. Check your watering schedule, inspect for pests, and consider soil testing to identify and correct nutrient imbalances."
);

// Poor Crop Yield
manager.addDocument(
  "en",
  "why is my crop yield low",
  "troubleshooting.low.yield"
);
manager.addDocument(
  "en",
  "reasons for poor crop yield",
  "troubleshooting.low.yield"
);
manager.addDocument(
  "en",
  "how to improve crop yield",
  "troubleshooting.low.yield"
);

manager.addAnswer(
  "en",
  "troubleshooting.low.yield",
  "Low crop yield can result from poor soil fertility, inadequate water, pest infestations, or suboptimal planting practices. Improve soil health with compost, ensure consistent watering, manage pests, and use quality seeds."
);

// Train and save the model
(async () => {
  await manager.train();
  manager.save();

  app.get("/", async (req, res) => {
    const userInput = req.query.message;
    let response;

    // Process user input
    const result = await manager.process("en", userInput);

    // Check if an answer was found based on predefined intents
    if (result.answer) {
      response = result.answer;
    } else {
      // Combine multiple responses or provide a default response
      const defaultResponses = [
        "I'm not sure I understand. Can you please rephrase or provide more details?",
        "Hmm, I don't have a specific answer for that. Could you ask something else?",
        "It seems like I'm not familiar with that topic. Is there something else you'd like to know?",
      ];
      response =
        defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    res.send({
      response:
        response ||
        "I'm not sure I understand. Can you please rephrase or provide more details or let me know what specific information or action you're looking for? I'm here to help!",
    });
  });
  app.listen(port, () => console.log(`AI app listening on port ${port}!`));
})();
