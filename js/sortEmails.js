function sortEmails() {

    let emails = ['riya riya@gmail.com', 'julia julia@julia.me', 'julia sjulia@gmail.com', 'julia julia@gmail.com', 'samantha samantha@gmail.com', 'tanya tanya@gmail.com'];
// filter emails with gmail it could be and with regex like: /@gmail\.com$/
    let filterMails = emails.sort().filter(mail => {
        if (mail.endsWith('gmail.com')) {
            return mail
        }
    })
    // sort and return emails first name
    return filterMails.reduce((a, mail) => {
        let split = mail.split(' ');
        return a += split[0] + '\n';
    }, '');

}
console.log(sortEmails());