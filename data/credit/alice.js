module.exports = {
    "username": "alice",
    "password": "wonderland",
    "UIN": "UIN-xxxx",
    "banks": [
               {
                   "bankName": "Barclays",
                   "bankId": "BBaarrccllaayyss",
                   "accounts": [
                       {
                           "accountType": "CC",
                           "accountNumber": "456789 0123456789",
                           "accountTitle": "Low Rate",
                           "creditLimit": 20000,
                           "availableCredit": 15000,
                           "totalBalanceDue": 5000,
                           "minBalanceDue": 500,
                           "apr": 30,
                           "dueDate": new Date(new Date().setDate(new Date().getDate() + 10))
                       }
                   ]
               },
               {
                   "bankName": "Citi Bank",
                   "bankId": "CCiittii  BBaannkk",
                   "accounts": [
                       {
                           "accountType": "CC",
                           "accountNumber": "567890 1234567890",
                           "accountTitle": "No Fee 0% Balance Transfer",
                           "creditLimit": 15000,
                           "availableCredit": 7000,
                           "totalBalanceDue": 8000,
                           "minBalanceDue": 3000,
                           "apr": 26,
                           "dueDate": new Date(new Date().setDate(new Date().getDate() + 7))
                       }
                   ]
               },
               {
                   "bankName": "HSBC",
                   "bankId": "HHSSBBCC",
                   "accounts": [
                       {
                           "accountType": "M",
                           "accountNumber": "567890 1234567890",
                           "accountTitle": "Home Loan",
                           "creditLimit": 15000,
                           "availableCredit": 8000,
                           "totalBalanceDue": 7000,
                           "minBalanceDue": 2000,
                           "apr": 24,
                           "dueDate": new Date(new Date().setDate(new Date().getDate() + 15))
                       }
                   ]
               }
           ]
}
