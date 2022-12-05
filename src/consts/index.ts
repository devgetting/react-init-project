export enum LegacyCredentialSteps {
  LAST_FOUR_DIGITS,
  ACCOUNT_ACCESS,
}

export const progressSteps = {
  [LegacyCredentialSteps.LAST_FOUR_DIGITS]: {
    step: 1,
  },
  [LegacyCredentialSteps.ACCOUNT_ACCESS]: {
    step: 2,
  },
};
