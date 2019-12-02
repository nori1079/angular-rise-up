export interface Action {
  fitnessId: number;
  name: string;
  level: number;
  exp: number;
  trainerId: string;
  gender: 'male' | 'female';
  ownerGitHubId: number;
}
