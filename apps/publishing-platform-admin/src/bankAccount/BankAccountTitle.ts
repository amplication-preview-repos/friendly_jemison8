import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "id";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.id?.toString() || String(record.id);
};
