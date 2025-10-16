/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Typed accessors for public env vars.│
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

type PublicEnvKey = "NEXT_PUBLIC_SCHOOL_NAME" | "NEXT_PUBLIC_EIIN";

type SchoolConfig = {
  readonly name: string;
  readonly eiin: string;
};

const readPublicEnv = (key: PublicEnvKey): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable ${key} is required but was not provided.`);
  }

  return value;
};

export const schoolConfig: SchoolConfig = {
  name: readPublicEnv("NEXT_PUBLIC_SCHOOL_NAME"),
  eiin: readPublicEnv("NEXT_PUBLIC_EIIN"),
};

export const SCHOOL_NAME: string = schoolConfig.name;
export const SCHOOL_EIIN: string = schoolConfig.eiin;
