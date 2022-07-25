import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}

export type Authority =
  | 'CO_ENROLLMENT'
  | 'NSC_FRAUD_USER'
  | 'GENERAL_BROWSER'
  | 'CMSO_BROWSER'
  | 'RO_CO_BROWSER'
  | 'EXTERNAL_USER'
  | 'SUPER_USER'
  | 'SECURITY_ADMIN'
  | 'CHAIN_ADMIN'
  | 'ENHANCED_BROWSER'
  | 'ENROLLMENT_USER'
  | 'MANAGER_USER'
  | 'CMS_FULL_BROWSER'
  | 'COGNOS_USER'
  | 'NSVC_36HR_USER'
  | 'STATE_USER';

