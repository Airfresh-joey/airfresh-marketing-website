# Sitemap Migration Report
## AirFresh Marketing Website Migration Analysis

**Date:** September 28, 2025
**Old Site:** https://www.airfreshmarketing.com
**New Site:** https://dev.airfreshmarketing.com

---

## Executive Summary

This report compares the sitemap structure between the old AirFresh Marketing website and the new development site. We've identified **9 critical missing pages** that need to be added to maintain SEO value and service offerings.

---

## ✅ Successfully Migrated Pages

### Core Pages
- **Homepage** - `/`
- **About Us** - `/about` (was `/about-us`)
- **Services** - `/services`
- **Contact** - `/contact` (was `/contact-us`)
- **Blog** - `/blog`
- **Portfolio** - `/portfolio` (restructured from `/projects`)

### Service Pages (Under /services)
- Brand Ambassadors - `/services/brand-ambassadors`
- Street Teams - `/services/street-teams`
- Experiential Marketing - `/services/experiential-marketing`
- Brand Strategy - `/services/brand-strategy`
- Event Production - `/services/event-production`

### Location Pages
All major city pages are present, including:
- New York, Los Angeles, Chicago, Miami, Atlanta, Denver, San Francisco, Boston
- Plus 40+ additional cities

### City Service Pages
For each city, the following service pages exist:
- Brand Ambassadors
- Convention Staffing
- Event Management
- Experiential Marketing
- Guerilla Marketing
- Marketing Mascots
- Promotional Models
- Street Team Marketing

---

## ❌ Missing Critical Pages

### Service Pages (Priority: HIGH)
These standalone service pages are missing and should be added:

| Page | Old URL | Status | SEO Impact |
|------|---------|--------|------------|
| **Promotional Models** | `/promotional-models` | ❌ Missing | High - Direct service offering |
| **Convention Staffing** | `/convention-staffing` | ⚠️ Partial (only under /services) | High - Major service line |
| **Marketing Mascots** | `/marketing-mascots` | ❌ Missing | Medium - Niche service |
| **Guerilla Marketing** | `/guerilla-marketing` | ❌ Missing | High - Popular search term |
| **Nationwide Brand Ambassadors** | `/nationwide-brand-ambassadors` | ❌ Missing | High - Geographic reach keyword |
| **Video Production** | `/video-production` | ❌ Missing | Medium - Additional service |
| **Brand Surveys & Market Sampling** | `/brand-surveys-and-market-sampling` | ❌ Missing | Medium - Specific service |

### Legal Pages (Priority: HIGH)
Essential for compliance and trust:

| Page | Old URL | Status | Importance |
|------|---------|--------|------------|
| **Terms and Conditions** | `/legal/terms-and-conditions` | ❌ Missing | Critical - Legal requirement |
| **Contractor Agreement** | `/legal/contractor-agreement` | ❌ Missing | High - Business operations |

### Project Pages Structure Change
The old site had individual project pages:
- `/projects/adidas`
- `/projects/aimco`
- `/projects/boss-coffee`
- `/projects/clif`
- `/projects/future-beauty-labs`
- `/projects/grubhub`
- `/projects/lyft`
- `/projects/mac`
- `/projects/merrell`
- `/projects/premierprotein`
- `/projects/visible`

The new site consolidates these under:
- `/portfolio` - General portfolio view
- `/case-studies` - Case study listings
- `/portfolio/:id` - Dynamic case study details

**Recommendation:** The consolidated approach is cleaner but ensure 301 redirects are in place for ALL 11 old project URLs listed above.

---

## 🆕 New Pages in Development Site

### Enhanced Targeting Pages
These are new additions that improve the site:

1. **Industry Verticals** - `/verticals/*`
   - Technology, Healthcare, Retail, etc.
   - City-specific vertical pages

2. **Convention Pages** - `/conventions/*`
   - CES, SXSW, Comic-Con specific pages
   - Location-based convention pages

3. **Event Pages** - `/events/*`
   - Super Bowl, World Cup, Olympics targeting
   - City-specific event pages

4. **Sports Marketing** - `/sports/*`
   - NFL, NBA, MLB team activations
   - Stadium and arena marketing

5. **Talent Portal** - `/talent`
   - New recruitment and application system

6. **Admin Tools** (Internal)
   - `/admin` - Dashboard
   - `/content-calendar` - Content management
   - `/reviews-dashboard` - Review monitoring

---

## 📊 URL Structure Comparison

### Old Site Structure
```
/
├── services/
│   └── (flat service pages at root level)
├── projects/
│   └── [individual client pages]
├── legal/
│   ├── terms-and-conditions
│   └── contractor-agreement
├── city pages (at root)
└── blog/
```

### New Site Structure
```
/
├── services/
│   └── [consolidated service pages]
├── portfolio/
│   └── :id (dynamic case studies)
├── case-studies/
├── city/:cityName
├── verticals/:slug/:city
├── conventions/:slug/:city
├── events/:slug/:city
├── sports/:slug/:city
└── blog/
```

---

## 🔧 Action Items

### Immediate Priority (Week 1)
1. **Add Legal Pages**
   - Create `/legal/terms-and-conditions`
   - Create `/legal/contractor-agreement`
   - Add footer links to legal pages

2. **Create Missing Service Pages**
   - `/promotional-models`
   - `/convention-staffing` (standalone)
   - `/guerilla-marketing`
   - `/nationwide-brand-ambassadors`

### Secondary Priority (Week 2)
3. **Add Additional Service Pages**
   - `/marketing-mascots`
   - `/video-production`
   - `/brand-surveys-and-market-sampling`

4. **SEO Preservation**
   - Set up 301 redirects from old project URLs to new portfolio structure
   - Maintain meta titles and descriptions from old pages
   - Preserve any backlinks by implementing redirects

### Optional Enhancements
5. **Consider Adding**
   - Sitemap.xml generation for new structure
   - Robots.txt optimization
   - Schema markup for local business
   - Breadcrumb navigation for deep pages

---

## 🔍 SEO Impact Assessment

### High Risk Areas
- **Missing service pages** - Could lose rankings for service-specific keywords
- **Changed URL structure** - Need 301 redirects to preserve link equity
- **Legal pages** - Important for trust signals and compliance

### Opportunities
- **New targeting pages** - Can capture long-tail keywords for events/conventions
- **Better site structure** - Improved navigation and user experience
- **City-service combinations** - More specific local SEO targeting

---

## 📈 Migration Checklist

- [ ] Add all missing service pages
- [ ] Create legal pages
- [ ] Implement 301 redirects for old URLs
- [ ] Update internal linking
- [ ] Test all city and city-service page combinations
- [ ] Verify meta tags and descriptions
- [ ] Submit new sitemap to Google Search Console
- [ ] Monitor 404 errors post-launch
- [ ] Check Google Search Console for crawl errors
- [ ] Validate all forms and CTAs

---

## 🚀 Deployment Notes

### Before Launch
1. Run full site crawl to identify broken links
2. Test all redirects from old URL structure
3. Verify all contact forms work
4. Check page load speeds
5. Validate mobile responsiveness

### After Launch
1. Monitor Google Search Console for errors
2. Check analytics for traffic drops
3. Review 404 error logs
4. Test critical user paths
5. Gather user feedback

---

## 📝 Additional Recommendations

1. **Content Audit**: Review content from missing pages to ensure valuable information is preserved
2. **Keyword Preservation**: Maintain target keywords from old pages in new structure
3. **Internal Linking**: Update internal links to point to new URL structure
4. **XML Sitemap**: Generate fresh sitemap with all new URLs
5. **Monitoring**: Set up alerts for 404 errors and traffic drops

---

## Contact

For questions about this migration report:
- **Technical Issues**: Development Team
- **SEO Concerns**: Marketing Team
- **Content Questions**: Content Team

---

*Last Updated: September 28, 2025*