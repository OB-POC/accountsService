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
                    "accountNumber": "XXXXXX XXXX6789",
                    "accountTitle": "Every Day Saver",
                    "standingInst": '100',
                    "balance": '2,100',
                    "minBalance": 100,
                    "interestRate": 0.20 ,
                    "availableBalance":'1,900'
                }
            ]
        },
        {
            "bankName": "HSBC",
            "bankId": "HHSSBBCC",
            "accounts": [
                {
                    "aaccountType": "PCA",
                    "accountNumber": "XXXXXX XXXX2345",
                    "accountTitle": "HSBC Advance Bank Account",
                    "standingInst": '1,100',
                    "balance": '4,000',
                    "minBalance": 200,
                    "interestRate": 0.10,
                    "availableBalance":'2,700'
                }
            ]
        },
        {
            "bankName": "Barclays",
            "bankId": "BBaarrccllaayyss",
            "accounts": [
                {
                    "accountType": "SB",
                    "accountNumber": "XXXXXX XXXX3456",
                    "accountTitle": "Easy Saver",
                    "standingInst": '1,100',
                    "balance": '1,500',
                    "minBalance": 200,
                    "interestRate": 0.25,
                    "availableBalance":'200'
                }
            ]
        }

    ]
}