import { createObjectCsvWriter } from 'csv-writer';
import { cityLocations, type CityLocation } from './city-data';
import path from 'path';
import fs from 'fs';

// Google My Business CSV format mapping - Official Google bulk upload spec
interface GMBRecord {
  storeCode: string;
  businessName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
  primaryPhone: string;
  additionalPhones: string;
  website: string;
  primaryCategory: string;
  additionalCategories: string;
  sundayHours: string;
  mondayHours: string;
  tuesdayHours: string;
  wednesdayHours: string;
  thursdayHours: string;
  fridayHours: string;
  saturdayHours: string;
  shortDescription: string;
  latitude: number;
  longitude: number;
}

// Convert phone number to E.164 format for Google
function formatPhoneE164(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  // Ensure it starts with country code
  if (cleaned.length === 10) {
    return `+1-${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  // If already has country code
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned[0]}-${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  // Return original if format is unexpected
  return phone;
}

// Convert city location to GMB CSV format
function cityToGMBRecord(city: CityLocation): GMBRecord {
  return {
    storeCode: city.storeCode,
    businessName: city.businessName,
    addressLine1: city.address,
    city: city.city,
    state: city.state,
    postalCode: city.zip,
    countryCode: 'US',
    primaryPhone: formatPhoneE164(city.phone),
    additionalPhones: '', // Empty for now
    website: city.website,
    primaryCategory: city.primaryCategory,
    additionalCategories: city.additionalCategories.join(';'), // Semicolon delimiter for Google
    sundayHours: city.openingHours.sunday,
    mondayHours: city.openingHours.monday,
    tuesdayHours: city.openingHours.tuesday,
    wednesdayHours: city.openingHours.wednesday,
    thursdayHours: city.openingHours.thursday,
    fridayHours: city.openingHours.friday,
    saturdayHours: city.openingHours.saturday,
    shortDescription: city.description.substring(0, 750), // Google limit is 750 chars
    latitude: city.latitude,
    longitude: city.longitude
  };
}

// Generate GMB CSV file
export async function generateGMBCSV(): Promise<string> {
  const tempDir = '/tmp';
  const fileName = `airfresh-gmb-locations-${Date.now()}.csv`;
  const filePath = path.join(tempDir, fileName);

  // Ensure temp directory exists
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // Create CSV writer with official GMB headers
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'storeCode', title: 'Store code' },
      { id: 'businessName', title: 'Business name' },
      { id: 'addressLine1', title: 'Address line 1' },
      { id: 'city', title: 'City' },
      { id: 'state', title: 'State' },
      { id: 'postalCode', title: 'Postal code' },
      { id: 'countryCode', title: 'Country code' },
      { id: 'primaryPhone', title: 'Primary phone' },
      { id: 'additionalPhones', title: 'Additional phones' },
      { id: 'website', title: 'Website' },
      { id: 'primaryCategory', title: 'Primary category' },
      { id: 'additionalCategories', title: 'Additional categories' },
      { id: 'sundayHours', title: 'Sunday hours' },
      { id: 'mondayHours', title: 'Monday hours' },
      { id: 'tuesdayHours', title: 'Tuesday hours' },
      { id: 'wednesdayHours', title: 'Wednesday hours' },
      { id: 'thursdayHours', title: 'Thursday hours' },
      { id: 'fridayHours', title: 'Friday hours' },
      { id: 'saturdayHours', title: 'Saturday hours' },
      { id: 'shortDescription', title: 'Short description' },
      { id: 'latitude', title: 'Latitude' },
      { id: 'longitude', title: 'Longitude' }
    ]
  });

  // Convert all city locations to GMB format
  const gmbRecords = cityLocations.map(cityToGMBRecord);

  // Write to CSV file
  await csvWriter.writeRecords(gmbRecords);

  return filePath;
}

// Generate supplementary data for GMB optimization
export async function generateSupplementaryData() {
  const data = {
    totalLocations: cityLocations.length,
    cities: cityLocations.map(city => ({
      name: city.city,
      state: city.state,
      url: city.website,
      phone: city.phone,
      servicesCount: city.services.length,
      serviceAreasCount: city.serviceAreas.length
    })),
    primaryCategories: Array.from(new Set(cityLocations.map(c => c.primaryCategory))),
    allServices: Array.from(new Set(cityLocations.flatMap(c => c.services))),
    allServiceAreas: Array.from(new Set(cityLocations.flatMap(c => c.serviceAreas))),
    metadata: {
      generatedAt: new Date().toISOString(),
      format: 'Google My Business Bulk Upload CSV',
      version: '2.0'
    }
  };

  return data;
}