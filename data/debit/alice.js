module.exports = {
    "username": "alice",
    "token": "XXXXXXXXXXXXX",
    "UIN": "XXXX-xxxx",
    "banks":[
                {
                    "bankName": "Halifax",
                    "bankId": "HHaalliiffaaxx",
                    "accounts": [
                        {
                            "accountType": "PCA",
                            "accountNumber": "123456 78901234",
                            "accountTitle": "Classic Account",
                            "standingInst": 300,
                            "balance": 1500,
                            "minBalance": 300,
                            "interestRate": 0 ,
                            "availableBalance":900
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
                            "standingInst": 1000,
                            "balance": 5000,
                            "minBalance": 300,
                            "interestRate": 0,
                            "availableBalance":3700
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
                            "standingInst": 700,
                            "balance": 5000,
                            "minBalance": 400,
                            "interestRate": 1,
                            "availableBalance":3900
                        }
                    ]
                }
            ]
}
