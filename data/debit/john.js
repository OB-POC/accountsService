module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
        {
            "bankName": "Halifax",
            "bankId": "HHaalliiffaaxx",
            "accounts": [
                {
                    "accountType": "SB",
                    "accountNumber": "678901 23456789",
                    "accountTitle": "Every Day Saver",
                    "standingInst": 1000,
                    "balance": 4000,
                    "minBalance": 500,
                    "interestRate": 0.20 ,
                    "availableBalance":2500
                }
            ]
        },
        {
            "bankName": "HSBC",
            "bankId": "HHSSBBCC",
            "accounts": [
                {
                    "accountType": "PCA",
                    "accountNumber": "234567 89012345",
                    "accountTitle": "HSBC Advance Bank Account",
                    "standingInst": 600,
                    "balance": 3000,
                    "minBalance": 300,
                    "interestRate": 0.5,
                    "availableBalance":2100
                }
            ]
        },
        {
            "bankName": "Barclays",
            "bankId": "BBaarrccllaayyss",
            "accounts": [
                {
                    "accountType": "SB",
                    "accountNumber": "345678 90123456",
                    "accountTitle": "Easy Saver",
                    "standingInst": 400,
                    "balance": 4000,
                    "minBalance": 100,
                    "interestRate": 0.25,
                    "availableBalance":3500
                }
            ]
        }

    ]
}