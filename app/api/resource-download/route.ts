import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, company, resourceTitle, resourceType, source } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      );
    }

    // Log the lead (replace with actual CRM integration)
    console.log('Resource download lead:', {
      email,
      firstName,
      company,
      resourceTitle,
      resourceType,
      source,
      timestamp: new Date().toISOString()
    });

    // TODO: Add HubSpot integration
    // const hubspotApiKey = process.env.HUBSPOT_API_KEY;
    // if (hubspotApiKey) {
    //   await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${hubspotApiKey}`,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       properties: {
    //         email,
    //         firstname: firstName,
    //         company,
    //         lead_source: 'Resource Download',
    //         resource_downloaded: resourceTitle,
    //         source_page: source
    //       }
    //     })
    //   });
    // }

    // TODO: Send email with download link
    // Could integrate with SendGrid, Resend, or other email provider

    return NextResponse.json({ 
      success: true,
      message: 'Lead captured successfully'
    });

  } catch (error) {
    console.error('Resource download error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
