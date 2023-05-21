/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

module.exports = {
    siteUrl: siteUrl,
    exclude: ['/404', '/500'],
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 1,
    robotsTxtOptions: {
        // 정책 설정
        policies: [
            {
                // 참조: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=ko
                userAgent: 'Googlebot',
                allow: '/', // 모든 페이지 주소 크롤링 허용
            },
            {
                // 참조: https://searchadvisor.naver.com/guide/seo-basic-firewall
                userAgent: 'Yeti',
                allow: '/', // 모든 페이지 주소 크롤링 허용
            },
        ],
        additionalSitemaps: [
            `${siteUrl}sitemap.xml`,
            `${siteUrl}server-sitemap.xml`,
        ],
    }
}
