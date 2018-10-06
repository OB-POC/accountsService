module.exports = {
    username: 'john',
    password: 'doe',
    UIN: 'UIN-xxxxx',
    creditScore: 650,
    banks: [
        {
            bankName: 'JP Morgan Chase',
            bankId: 'JJPP  MMoorrggaann  CChhaassee',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '456789 0123456789',
                    accountTitle: 'Chase Freedom Unlimited Credit Card',
                    creditLimit: 3000,
                    availableCredit: 200,
                    totalBalanceDue: 2800,
                    minBalanceDue: 30,
                    apr: 25.49,
                    dueDate: new Date().setDate(new Date().getDate()+12)                         
                }
            ]
        },
        {
            bankName: 'Bank of Scotland',
            bankId: 'BBaannkk  ooff  SSccoottllaanndd',
            accounts: [
                {
                    accountType: 'CC',
                    accountNumber: '567890 1234567890',
                    accountTitle: 'Classic Credit Card',
                    creditLimit: 1200,
                    availableCredit: 800,
                    totalBalanceDue: 400,
                    minBalanceDue: 100,
                    apr: 27.9,
                    dueDate: new Date().setDate(new Date().getDate()+5)                          
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
                    interestRate: 2.9,
                    dueDate: new Date().setDate(new Date().getDate()+20)                         
                }
            ]
        }
    ]
}