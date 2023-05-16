/** @type {import('next').NextConfig} */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore
    // org: process.env.NEXT_PUBLIC_SENTRY_ORG,
    // project: '',
    // include: '.next', // <- source
    // ignore: ['node_modules'],
    // stripPrefix: ['webpack://_N_E/'],
    // urlPrefix: `~/_next`, // <- asset prefix

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    sentry: {
        hideSourceMaps: true,
    },
}

module.exports = (
    process.env.NODE_ENV === 'production'
        ? withBundleAnalyzer(
            withSentryConfig(
                nextConfig,
                sentryWebpackPluginOptions
            ))
        : nextConfig
);
