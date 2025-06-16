---
id: payto-api
title: PayTo API - Create Agreement and Payment
sidebar_label: create agreement
---

# Create Agreement

**POST** `https://api.sandbox.zeptopayments.com/payto/agreements`

[//]: # (![这是一个示例图片]&#40;./assets/test-image.svg&#41;)

## Request Body Parameters

| Field           | Type   | Required | Description                                                         |
|----------------|--------|----------|---------------------------------------------------------------------|
| `description`   | string | Yes      | A short description for the agreement.                             |
| `debtor`        | object | Yes      | The party from whom the payment is taken.                          |
| `debtor.party_name` | string | Yes | Full name of the debtor.                                           |
| `debtor.account_identifier` | object | Yes | Debtor's account details.                                         |
| `debtor.account_identifier.type` | string | Yes | Must be `"bban"`.                                            |
| `debtor.account_identifier.value` | string | Yes | Bank account number.                                         |
| `creditor`      | object | Yes      | The party to whom the payment is made.                             |
| `creditor.party_name` | string | Yes | Full name of the creditor.                                        |
| `creditor.account_identifier` | object | Yes | Creditor's account details.                                       |
| `creditor.account_identifier.type` | string | Yes | Must be `"bban"`.                                            |
| `creditor.account_identifier.value` | string | Yes | Bank account number.                                         |
| `payment_terms` | object | Yes      | Specifies the type, frequency, and amount of the agreement.        |
| `payment_terms.amount` | integer | Yes | Amount in cents.                                                  |
| `payment_terms.frequency` | string | Yes | Frequency of the payment (e.g., monthly).                         |

## Example Request

```json
{
  "description": "Monthly subscription for premium plan",
  "debtor": {
    "party_name": "John Doe",
    "account_identifier": {
      "type": "bban",
      "value": "123456-78901234"
    }
  },
  "creditor": {
    "party_name": "Acme Corp",
    "account_identifier": {
      "type": "bban",
      "value": "234567-89012345"
    }
  },
  "payment_terms": {
    "amount": 2495,
    "frequency": "monthly"
  }
}
```

---

# Create Payment

**POST** `https://api.sandbox.zeptopayments.com/payto/payments`

## Request Body Parameters

| Field            | Type    | Required | Description                                                         |
|------------------|---------|----------|---------------------------------------------------------------------|
| `uid`            | string  | Yes      | Unique identifier for payment (1–64 chars, RFC3986).                |
| `agreement_uid`  | string  | Yes      | A supplied unique ID.                                              |
| `amount`         | integer | Yes      | Amount in cents.                                                   |
| `priority`       | string  | Yes      | `attended` or `unattended`. Attended has higher priority.          |
| `reference`      | string  | No       | Free-form text for reconciliation.                                 |
| `creditor`       | object  | Yes      | The party receiving the payment.                                   |
| `creditor.account_identifier` | object | Yes | Bank account.                                                     |
| `creditor.account_identifier.type` | string | Yes | Must be `"bban"`.                                            |
| `creditor.account_identifier.value` | string | Yes | Bank account number.                                         |
| `sandbox`        | object  | No       | Test environment flags.                                             |
| `sandbox.simulate` | string | No      | Optional simulation config (`"auto_settle"`, etc).                  |

## Example Request

```json
{
  "uid": "biz_20221231_G7",
  "agreement_uid": "Agreement_00012",
  "amount": 2495,
  "priority": "unattended",
  "reference": "INVOICE #1003",
  "creditor": {
    "account_identifier": {
      "type": "bban",
      "value": "1234567890"
    }
  },
  "sandbox": {
    "simulate": "auto_settle"
  }
}
```
