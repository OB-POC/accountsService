module.exports = {
    "username": "alice",
    "password": "wonderland",
    "UIN": "UIN-xxxx",
    "creditScore": 700,
    "banks": [
        {
            bankName: 'JP Morgan Chase',
            bankId: 'JJPP  MMoorrggaann  CChhaassee',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Chase Freedom Unlimited Credit Card',
                    creditLimit: 3000,
                    availableCredit: 1200,
                    totalBalanceDue: 1800,
                    minBalanceDue: 30,
                    apr: 25.49,
                    dueDate: new Date().setDate(new Date().getDate()+5)                         
                }
            ]
        },
        {
            bankName: 'RBS',
            bankId: 'RRBBSS',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'RBS Unlimited Credit Card',
                    creditLimit: 4000,
                    availableCredit: 3800,
                    totalBalanceDue: 200,
                    minBalanceDue: 100,
                    apr: 19.94,
                    dueDate: new Date().setDate(new Date().getDate()+12)                          
                }
            ]
        },
        {
            bankName: 'Monzo',
            bankId: 'MMoonnzzoo',
            accounts: [
                {
                    accountType: 'M',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Home Loan',
                    minMonthlyPayment: 900,
                    remainingFullTerm: '0Y 5M',
                    totalBalanceDue: 6000,
                    interestRate: 2.90,
                    dueDate: new Date().setDate(new Date().getDate()+20)                         
                }
            ]
        }
    ]
}
