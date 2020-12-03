/**
 * @file type definition for global application settings/context
 */

export type Settings = EnvironmentSettings & GlobalSettings;

export type EnvironmentSettings = {
    backendEndpoint: string;
};

export type GlobalSettings = {
    supportedCountries: string[];
};
