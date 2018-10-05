module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
            {
                "bankName": "BOS",
                "bankId": "BBOOSS",
                "accounts": [
                    {
                        "accountType": "PCA",
                        "accountNumber": "678901 23456789",
                        "accountTitle": "Classic Account",
                        "standingInst": 300,
                        "balance": 2300,
                        "minBalance": 100,
                        "interestRate": 0 ,
                        "availableBalance":1900
                    }
                ]
            },
            {
                "bankName": "HHSSBBCC",
                "bankId": "HHSSBBCC",
                "accounts": [
                    {
                        "aaccountType": "PCA",
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
                        "standingInst": 1700,
                        "balance": 5000,
                        "minBalance": 300,
                        "interestRate": 1,
                        "availableBalance":3000
                    }
                ]
            }
    
    ]
}