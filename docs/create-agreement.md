---
id: create-agreement
title: Create Agreement
sidebar_label: create agreement
description: Create a PayTo Agreement with Zepto-like API structure
---

# Create Agreement

**POST** `https://api.sandbox.myoligo.com/payto/agreements`

Create a new PayTo agreement for initiating recurring or one-time payments between a debtor and a creditor.

---

## Request Headers

```http
Authorization: Bearer <access_token>
Content-Type: application/json
Accept: application/json
```

---

## Request Body Parameters

| Field              | Type     | Required | Description                                                                 |
|-------------------|----------|----------|-----------------------------------------------------------------------------|
| `description`      | string   | Yes      | A short description for the agreement.                                      |
| `debtor`           | object   | Yes      | The party from whom the payment is taken.                                   |
| `creditor`         | object   | Yes      | The party to whom the payment is made.                                      |
| `payment_terms`    | object   | Yes      | Specifies the type, frequency, and amount of the agreement.                 |

### Example Request

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
      "value": "654321-09876543"
    }
  },
  "payment_terms": {
    "type": "fixed",
    "frequency": "monthly",
    "amount": 5000,
    "first_payment_date": "2025-07-01",
    "last_payment_date": "2026-06-01"
  }
}
```

---

## Successful Response

Returns a JSON object containing the unique ID of the created agreement and its initial status.

```json
{
  "uid": "agreement_ABC123",
  "status": "pending",
  "created_at": "2025-06-16T10:41:42Z",
  "links": {
    "self": "https://api.sandbox.myoligo.com/payto/agreements/agreement_ABC123"
  }
}
```

---

## Agreement Status Lifecycle

| Status      | Description                                                               |
|-------------|---------------------------------------------------------------------------|
| `pending`   | Agreement has been created but is not yet active.                         |
| `created`   | Agreement was created successfully and awaits debtor authorization.       |
| `active`    | Agreement is active and authorized.                                       |
| `declined`  | Debtor declined the agreement.                                            |
| `expired`   | Agreement expired without being authorized.                               |
| `cancelled` | Agreement was cancelled by the debtor or creditor.                        |
| `suspended` | Agreement is temporarily suspended and cannot be used.                    |

_Note: `declined`, `expired`, and `cancelled` are terminal states and cannot be reactivated._

---

## Webhook Events

Once the agreement is created, the following webhook events may be triggered:

- `payto_agreement.activated`
- `payto_agreement.declined`
- `payto_agreement.expired`
- `payto_agreement.failed`

Each event includes the agreement details and updated status.

---

## Try It

You can test this endpoint using the following cURL command:

```bash
curl --request POST \
  --url https://api.sandbox.myoligo.com/payto/agreements \
  --header 'accept: application/json' \
  --header 'authorization: Bearer <your_token>' \
  --header 'content-type: application/json' \
  --data '{
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
        "value": "654321-09876543"
      }
    },
    "payment_terms": {
      "type": "fixed",
      "frequency": "monthly",
      "amount": 5000,
      "first_payment_date": "2025-07-01",
      "last_payment_date": "2026-06-01"
    }
  }'
```

---

> Base URL: `https://api.sandbox.myoligo.com`
