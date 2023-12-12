/** @type {import('next').NextConfig} */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate-plugin');

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
  sentry: {
    hideSourceMaps: true,
  },
  ...nextTranslate()
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
