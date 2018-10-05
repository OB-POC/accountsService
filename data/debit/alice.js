module.exports = {
    "username": "alice",
    "password": "wonderland",
    "UIN": "XXXX-xxxx",
    "creditScore": 700,
    "banks":[
        {
            "bankName": "Halifax",
            "bankId": "HHaalliiffaaxx",
            "accounts": [
                {
                    "accountType": "PCA",
                    "accountNumber": "123456 78901234",
                    "accountTitle": "Classic Account",
                    "standingInst": 500,
                    "balance": 2500,
                    "minBalance": 100,
                    "interestRate": 0 ,
                    "availableBalance":1900
                }
            ]
        },
        {
            "bankName": "Barclays",
            "bankId": "Barclays",
            "accounts": [
                {
                    "accountType": "PCA",
                    "accountNumber": "234567 89012345",
                    "accountTitle": "Platinum Account",
                    "standingInst": 500,
                    "balance": 2000,
                    "minBalance": 100,
                    "interestRate": 0,
                    "availableBalance":1400
                }
            ]
        },
        {
            "bankName": "Monzo",
            "bankId": "Monzo",
            "accounts": [
                {
                    "accountType": "Savings",
                    "accountNumber": "345678 90123456",
                    "accountTitle": "Easy Saver",
                    "standingInst": 500,
                    "balance": 5000,
                    "minBalance": 100,
                    "interestRate": 1,
                    "availableBalance":4400
                }
            ]
        }

    ]
}
